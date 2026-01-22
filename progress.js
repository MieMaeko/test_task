function progressApi(rootElement) {
    const bar = rootElement.querySelector('.progress-bar');
    return {
        setProgress(value) {
            bar.style.setProperty('--pg-bar', `${value}%`)
        },
        setHidden() {
            bar.classList.toggle('hidden');
        },
        setAnimated() {
            bar.classList.toggle('animated');
        }
    }
}

window.onload = () => {
    const root = document.querySelector('.progress-block');
    const api = progressApi(root);
    const inp = document.getElementById('progress-value');
    const hide = document.getElementById('progress-hide');
    const anim = document.getElementById('progress-animate')

    inp.addEventListener("input", () => {
        inp.value = inp.value.replace(/[^\d]/g, "");
        if (inp.value > 100) inp.value = 100;
        if (inp.value < 0) inp.value = 0;
        api.setProgress(inp.value)
    })

    hide.addEventListener('change', () => {
        api.setHidden()
    })

    anim.addEventListener('change', () => {
        api.setAnimated()
    })
}
