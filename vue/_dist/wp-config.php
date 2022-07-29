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
define( 'DB_NAME', 'jornaldireitoscom' );

/** MySQL database username */
define( 'DB_USER', 'direitos' );

/** MySQL database password */
define( 'DB_PASSWORD', 'ahFy#jCO=bMl' );

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
define( 'AUTH_KEY',         '~>gTF#>/d<l5qMUD[2v:#>tGxISN09WQ&*72HE_@;oxU.(n08(=To==LjVDm4!&m' );
define( 'SECURE_AUTH_KEY',  'tO-`#DxLeZ][V3DeWL{P~t~[G3i9Gaf.Fp{ODmJ>EMCrXN051Inu/nKZnC)i1I.5' );
define( 'LOGGED_IN_KEY',    'Kgc^.) +gEA/$b].WNa3bH:uhFb`{v@iy~Au:Yi!w:(e>e|Y|W9`,5A#HcJOSY1f' );
define( 'NONCE_KEY',        'dlXP-bB}hWOO1zSi4[C_&o,>pShY.s(%KR-x9!}44bq6[/!sO&*sb>!#o7uTY D,' );
define( 'AUTH_SALT',        '8S#YEPGJ.tsQ9XE Xz{KhVN~WuI!yxUBPhSe??S@Huol>p]~rf1z UI1-yc-crPP' );
define( 'SECURE_AUTH_SALT', 'D<)@1z+AkMsYv~o+Q|+v-+Vt*6*L6F{zW:T=andjmy{)=I{mXmf.8}Am>r.>r0@I' );
define( 'LOGGED_IN_SALT',   'CB#).:2jocMyY4V9,E9(feE1Z*KoUxdq#/Qn<Ha=kDAk*Zvea&>aQr11+q:f(!C0' );
define( 'NONCE_SALT',       'k$d}sucL/zyU(A+z}*Qxwj_5NaQQVw:@LD)nd]~JRz(ni*,)?H+FH)oy&;y#@mSk' );

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

