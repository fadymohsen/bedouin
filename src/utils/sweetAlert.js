import Swal from 'sweetalert2';
import "./style.scss"
const BRAND_COLOR = '#CF9050';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});

const sweetAlert = {
    success: (title, text) =>
        Swal.fire({
            icon: 'success',
            title,
            text,
            timer: 2000,
            showConfirmButton: false,
        }),

    error: (title, text) =>
        Swal.fire({
            icon: 'error',
            title,
            text,
            confirmButtonColor: BRAND_COLOR,
        }),

    warning: (title, text) =>
        Swal.fire({
            icon: 'warning',
            title,
            text,
            confirmButtonColor: BRAND_COLOR,
        }),

    info: (title, text) =>
        Swal.fire({
            icon: 'info',
            title,
            text,
            confirmButtonColor: BRAND_COLOR,
        }),

    confirm: (title, text, confirmText = 'Yes', cancelText = 'Cancel') =>
        Swal.fire({
            icon: 'question',
            title,
            text,
            showCancelButton: true,
            confirmButtonColor: BRAND_COLOR,
            cancelButtonColor: '#aaa',
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
        }),

    toast: {
        success: (title) => Toast.fire({ icon: 'success', title }),
        error: (title) => Toast.fire({ icon: 'error', title }),
        warning: (title) => Toast.fire({ icon: 'warning', title }),
        info: (title) => Toast.fire({ icon: 'info', title }),
    },
};

export default sweetAlert;