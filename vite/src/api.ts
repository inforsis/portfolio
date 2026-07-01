type ApiResponse<T> = {
  data: T;
};

const DATA_BASE_URL = `${import.meta.env.BASE_URL}data/api/`;

const endpointFiles = new Set([
  "about",
  "funfacts",
  "home",
  "pages",
  "portfolio",
  "posts",
  "social",
  "statistics",
  "timeline",
]);

function normalizeEndpoint(endpoint: string) {
  return endpoint.replace(/^\/+/, "");
}

function resolveFileName(endpoint: string) {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const [path] = normalizedEndpoint.split("?");

  if (endpointFiles.has(path)) {
    return `${path}.json`;
  }

  throw new Error(`JSON endpoint not mapped: ${endpoint}`);
}

function filterPostsBySlug<T>(endpoint: string, data: unknown): T {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const [path, query = ""] = normalizedEndpoint.split("?");

  if (path !== "posts" || !Array.isArray(data)) {
    return data as T;
  }

  const slug = new URLSearchParams(query).get("slug");

  if (!slug) {
    return data as T;
  }

  return data.filter((post) => {
    return (
      typeof post === "object" &&
      post !== null &&
      "slug" in post &&
      post.slug === slug
    );
  }) as T;
}

async function get<T>(endpoint: string): Promise<ApiResponse<T>> {
  const fileName = resolveFileName(endpoint);
  const response = await fetch(`${DATA_BASE_URL}${fileName}`);

  if (!response.ok) {
    throw new Error(`Could not load JSON data from ${fileName}`);
  }

  const data = await response.json();

  return {
    data: filterPostsBySlug<T>(endpoint, data),
  };
}

const api = {
  get,
};

export default api;
