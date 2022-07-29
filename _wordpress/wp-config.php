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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
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
define( 'AUTH_KEY',         'Xf_g>SP3$Z=}Sd!i1lH2:OpVrSLA$/G@i@Ak |tw4WU=9,Q/!AR3Hj`b]vz+*P!2' );
define( 'SECURE_AUTH_KEY',  '-GC+)s8aupN]_5.0@o:qqf$FH<]F%9GN+ rIjpy4mI!e#ihlsxeObzi@lNLB;;5:' );
define( 'LOGGED_IN_KEY',    ',$C~A+0qW]i9fP>X3mjM}w!3uy(!Pr]2_1!bc}%[:5*2PWG?^]yVOB } 8:mj_Ca' );
define( 'NONCE_KEY',        '/Dp^uo/ 2fT.cuJA~]qp&cc5NeI]a7(7E9_ojv<A(<5X?xJ-dNc7E9_aqeejV17O' );
define( 'AUTH_SALT',        '6qksc[:;YI5IlZu$.=uq2G;YcpRR /6G8~|B?}q!TBvj.NfTjwQ5.EOZfW<+vK!c' );
define( 'SECURE_AUTH_SALT', 'd/fCf:3q>LT/7apK@|TNR~M_UGDdo`km=T[!IiEW[*+0sz=v.QrNF$Z,P>YcfDQw' );
define( 'LOGGED_IN_SALT',   '(KP,2rE-GpdR7oj:c0`sh&<T?N-E}&8i6[.Zo-*p TM&xa^<]ouLqA>G/) lB(t%' );
define( 'NONCE_SALT',       '@jou~XItk[Hlna-SI8KM|L~rc_Fw6xS;KWL%XUk{{D#%)k$3D3n1J!mz~?iDQp}Q' );

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
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
