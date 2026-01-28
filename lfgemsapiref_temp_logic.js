
let lastSettingsCache = {};

function resetDefaults() {
    // 1. Snapshot current settings
    lastSettingsCache = {};
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(el => {
        if (el.id) {
            lastSettingsCache[el.id] = (el.type === 'checkbox') ? el.checked : el.value;
        }
    });

    if (!confirm("Are you sure you want to reset all settings to defaults?")) {
        return;
    }

    // 2. Reset to defaults
    inputs.forEach(el => {
        if (el.type === 'checkbox') {
            el.checked = el.defaultChecked;
        } else if (el.tagName === 'SELECT') {
            let def = Array.from(el.options).find(o => o.defaultSelected);
            if (def) el.value = def.value;
            else if (el.options.length > 0) el.selectedIndex = 0;
        } else {
            if (el.defaultValue !== undefined) el.value = el.defaultValue;
        }
    });

    // 3. Trigger recalculation
    startCompute();

    // 4. Show Undo
    const restoreBtn = document.getElementById('btnRestore');
    const resetBtn = document.getElementById('btnReset');

    restoreBtn.classList.remove('hidden');
    const origText = "Reset Defaults";
    resetBtn.innerText = "Reset Complete";
    setTimeout(() => {
        resetBtn.innerText = origText;
    }, 2000);
}

function restoreSettings() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(el => {
        if (el.id && lastSettingsCache[el.id] !== undefined) {
            if (el.type === 'checkbox') {
                el.checked = lastSettingsCache[el.id];
            } else {
                el.value = lastSettingsCache[el.id];
            }
        }
    });

    startCompute();

    document.getElementById('btnRestore').classList.add('hidden');
}
