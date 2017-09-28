// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';
//
// const propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.string,
//   inverse: PropTypes.bool,
//   pointer: PropTypes.bool,
//   size: PropTypes.string,
// };
//
// const defaultProps = {
//   color: null,
//   inverse: false,
//   pointer: false,
//   size: null,
// };
//
// const styles = theme => ({
//   root: {
//     display: 'inline-block',
//     height: 48,
//     width: 48,
//     userSelect: 'none',
//     flexShrink: 0,
//   },
//   foreground: {
//     fill: theme.palette.text.primary,
//   },
//   background: {
//     fill: 'transparent',
//   },
//   colorInherit: {
//     '& $foreground': {
//       fill: 'inherit',
//     },
//   },
//   primary: {
//     '& $foreground': {
//       fill: theme.palette.primary[500],
//     },
//     '&$background': {
//       fill: theme.palette.getContrastText(theme.palette.primary[500]),
//     },
//     '&$inverse': {
//       '& $foreground': {
//         fill: theme.palette.getContrastText(theme.palette.primary[500]),
//       },
//       '& $background': {
//         fill: theme.palette.primary[500],
//       },
//     },
//   },
//   accent: {
//     '& $foreground': {
//       fill: theme.palette.secondary.A200,
//     },
//     '&$background': {
//       fill: theme.palette.getContrastText(theme.palette.secondary.A200),
//     },
//     '&$inverse': {
//       '& $foreground': {
//         fill: theme.palette.getContrastText(theme.palette.secondary.A200),
//       },
//       '& $background': {
//         fill: theme.palette.secondary.A200,
//       },
//     },
//   },
//   xs: {
//     height: 12,
//     width: 12,
//   },
//   sm: {
//     height: 24,
//     width: 24,
//   },
//   md: {
//     height: 48,
//     width: 48,
//   },
//   lg: {
//     height: 72,
//     width: 72,
//   },
//   xl: {
//     height: 120,
//     width: 120,
//   },
//   inverse: {},
//   pointer: {
//     cursor: 'pointer',
//   },
// });
//
//
// const ARAIcon = (props) => {
//   const { classes, color, className: classNameProp, inverse, pointer, size } = props;
//
//   const className = classNames(
//     {
//       [classes.root]: true,
//       [classes.colorInherit]: color === 'inherit',
//       [classes.primary]: color === 'primary',
//       [classes.accent]: color === 'accent',
//       [classes.inverse]: inverse,
//       [classes.pointer]: pointer,
//       [classes.xs]: size === 'xs',
//       [classes.sm]: size === 'sm',
//       [classes.md]: size === 'md',
//       [classes.lg]: size === 'lg',
//       [classes.xl]: size === 'xl',
//     },
//     classNameProp,
//   );
//   return (
//     <div>
//       <svg
//         className={classNames(classes.root, className)}
//         viewBox="0 0 480 480"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//       >
//         <clipPath id="p.0">
//           <path d="m0 0l480 0 0 480 -480 0 0-480z" />
//         </clipPath>
//         <g clipPath="url(#p.0)">
//           <path d="m0 0l480 0 0 480 -480 0z" className={classNames(classes.root, className, classes.background)} />
//           <path d="m21.8 438.8l180.4-176.7 180.4 176.7z" className={classNames(classes.root, className, classes.foreground)} />
//           <path d="m156.2 421.4l0-40.8 104.4-101.1 104.4 101.1 0 40.8z" className={classNames(classes.root, className, classes.foreground)} />
//           <path d="m253.3 144.7l103.5-103.5 103.5 103.5 -51.7 0 0 294.1 -103.5 0 0-294.1z" className={classNames(classes.root, className, classes.foreground)} />
//         </g>
//       </svg>
//     </div>
//   );
// };
//
// ARAIcon.propTypes = propTypes;
// ARAIcon.defaultProps = defaultProps;
//
// export default withStyles(styles, { name: 'MuiSvgIcon' })(ARAIcon);
