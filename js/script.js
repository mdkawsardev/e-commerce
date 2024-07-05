
.navbar-expand {
    @each $breakpoint in map-keys($grid-breakpoints) {
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    $infix: breakpoint-infix($next, $grid-breakpoints);

    &#{$infix} {
        @include media-breakpoint-up($next) {
        flex-wrap: nowrap;
        justify-content: flex-start;

        .navbar-nav {
            flex-direction: row;

            .dropdown-menu {
            position: absolute;
            }

            .nav-link {
            padding-right: var(--#{$prefix}navbar-nav-link-padding-x);
            padding-left: var(--#{$prefix}navbar-nav-link-padding-x);
            }
        }

        .navbar-nav-scroll {
            overflow: visible;
        }
        .navbar-collapse {
            display: flex !important;
            flex-basis: auto;
        }

        .navbar-toggler {
            display: none;
        }
        .offcanvas {
            position: static;
            z-index: auto;
            flex-grow: 1;
            width: auto !important;
            height: auto !important;
            visibility: visible !important;
            background-color: transparent !important;
            border: 0 !important;
            transform: none !important;
            @include box-shadow(none);
            @include transition(none);
            .offcanvas-header {
            display: none;
            }
            .offcanvas-body {
            display: flex;
            flex-grow: 0;
            padding: 0;
            overflow-y: visible;
            }
        }
        }
    }
    }
}
