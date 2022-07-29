<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'jadson.dev' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'B-T`i-rQ|-TUX@|AA<&-=YAa|64]DKz2yr2+&`hk[)Y,NNdm0f8yL<Y+sR^`9uF+');
define('SECURE_AUTH_KEY',  'x3LR?01N,)]~,D{Z_+?/I(#,%g:F>8p5MRDEil{>bkt+KtHNsqko-|SYSY-eFnCn');
define('LOGGED_IN_KEY',    '--sL=uC7zau><pph~X6~U-?&Z#/INln=3RtuQ~@4s;@ q0:y]XG+.@Xo&tRQFt~^');
define('NONCE_KEY',        'q;nn$x_l-L~+52-r2hGHd/Bf)R~ HIO8khH$}K)&J!|ksjPwpOx>6?+5#|&&BA+b');
define('AUTH_SALT',        '~QX~)9L*kXQO)Hjo)oe*]+_98fGr_pHtMtp;f$ay@&OE3PBEa}8S>fSCT2) +UV$');
define('SECURE_AUTH_SALT', '}MnBM~SG8|QbmPTN;B||f,N/Vn7:>ZP%>Si&AIRYVk^?S+-F`BkqTgm|^K$@L9#w');
define('LOGGED_IN_SALT',   ',G18&|u=6RWYqWY>/^ }AC-R;+beu]:afz`rJ <-62svFbXnDs~4rhhkjYXr;Nj^');
define('NONCE_SALT',       'pQH#g;vZ?-t5;t;c(hB#6s(N,c=m&>C`0{I0a64!_n3rRPZ8`*UM[2-`C :| d+W');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
