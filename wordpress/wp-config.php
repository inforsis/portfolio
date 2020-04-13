<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jadson.dev' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*Jk[y~8Phfcs9yUioCzkxp|B~^8m_8w4AZohSSiuQ09/jh~M)/HsMj>se)lVp9Eo' );
define( 'SECURE_AUTH_KEY',  'P;_BY|tEU8Ocret/W0~BN6+D/#w)E5A&4Ae]TJ{73gylX6Q&;bGdR5.JdJrMF|Pf' );
define( 'LOGGED_IN_KEY',    'rlo[(rr@2+79xPbR-DrSNV9YaG*:$N:D/?bHpY/*.)x.M| ]K1gyJrz;=Lv>|Yme' );
define( 'NONCE_KEY',        'J<}UOTY~D?sso@B<lfnn6%w+@8>v~Ke;CmX~j@:~1M3h~s6GcDrerN?[u/BO.fBJ' );
define( 'AUTH_SALT',        'wk_TF_9tfK1N|,_$lHo-l+Kj(zv-G@szM2ee4Xn.7L+px~OyiUWX9_z~9LDdbbL|' );
define( 'SECURE_AUTH_SALT', '=WW>zMNw0sC3twr+G>kZH8ERO)m#B|E; P%g=>LHB69E8wJX))Mao[Q@ZNsV^YJS' );
define( 'LOGGED_IN_SALT',   '%&@nQ!nK~bT#G5Gr 04YdDgk+dQ!m0uWrAGV]od28U>O#]CHf.^X{w1%^zOvTiwS' );
define( 'NONCE_SALT',       'Gy0t^u3?ZMi4ViFrB3wr2]nShX1i!@*$6Ma %(ZeD`A~sztQ9oDX>qyHjJM<`T~a' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
