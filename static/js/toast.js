function showToast(title, message, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    const toastProgress = document.getElementById('toast-progress');

    if (!toastComponent) return;

    // Hapus
    toastComponent.classList.remove(
        'bg-red-50', 'border-red-500', 'text-red-600',
        'bg-green-50', 'border-green-500', 'text-green-600',
        'bg-yellow-50', 'border-yellow-500', 'text-yellow-600',
        'bg-blue-50', 'border-blue-500', 'text-blue-600',
        'bg-white', 'border-gray-300', 'text-gray-800'
    );

    // Set icon
    let iconSymbol = 'ℹ️';
    if (type === 'success') {
        iconSymbol = '✅';
        toastComponent.classList.add('bg-green-50', 'border-green-500', 'text-green-600');
        toastComponent.style.border = '1px solid #22c55e';
    } else if (type === 'error') {
        iconSymbol = '❌';
        toastComponent.classList.add('bg-red-50', 'border-red-500', 'text-red-600');
        toastComponent.style.border = '1px solid #ef4444';
    } else if (type === 'warning') {
        iconSymbol = '⚠️';
        toastComponent.classList.add('bg-yellow-50', 'border-yellow-500', 'text-yellow-600');
        toastComponent.style.border = '1px solid #eab308';
    } else {
        iconSymbol = 'ℹ️';
        toastComponent.classList.add('bg-blue-50', 'border-blue-500', 'text-blue-600');
        toastComponent.style.border = '1px solid #3b82f6';
    }

    // Update
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toastIcon.textContent = iconSymbol;

    // Reset progress bar
    if (toastProgress) {
        toastProgress.style.transition = 'none';
        toastProgress.style.width = '100%';
        setTimeout(() => {
            toastProgress.style.transition = `width ${duration}ms linear`;
            toastProgress.style.width = '0%';
        }, 10);
    }

    toastComponent.classList.remove('opacity-0', 'translate-y-64');
    toastComponent.classList.add('opacity-100', 'translate-y-0');

    // Timeout
    setTimeout(() => {
        toastComponent.classList.remove('opacity-100', 'translate-y-0');
        toastComponent.classList.add('opacity-0', 'translate-y-64');
    }, duration);
}