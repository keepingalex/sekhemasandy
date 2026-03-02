// BASE TYPE AND AFFIXES
const RELIC_BASES = {
    'seal_relic': { id: 'seal_relic', name: 'Seal Relic', width: 2, height: 1, imageUrl: 'sealrelic.webp', pool: 'seal_urn' },
    'urn_relic': { id: 'urn_relic', name: 'Urn Relic', width: 1, height: 2, imageUrl: 'urnrelic.webp', pool: 'seal_urn' },
    'tapestry_relic': { id: 'tapestry_relic', name: 'Tapestry Relic', width: 3, height: 1, imageUrl: 'tapestryrelic.webp', pool: 'tapestry' },
    'amphora_relic': { id: 'amphora_relic', name: 'Amphora Relic', width: 1, height: 3, imageUrl: 'amphorarelic.webp', pool: 'tapestry' },
    'vase_relic': { id: 'vase_relic', name: 'Vase Relic', width: 1, height: 4, imageUrl: 'vaserelic.webp', pool: 'vase' },
    'incense_relic': { id: 'incense_relic', name: 'Incense Relic', width: 4, height: 1, imageUrl: 'incenserelic.webp', pool: 'vase' },
    'coffer_relic': { id: 'coffer_relic', name: 'Coffer Relic', width: 2, height: 2, imageUrl: 'cofferrelic.webp', pool: 'vase' },
    'last_flame': { id: 'last_flame', name: 'The Last Flame Incense', width: 4, height: 1, imageUrl: 'lastflame.webp', isUnique: true, fixedMods: ["Zarokh, the Temporal drops Temporalis", "Damage taken cannot be Absorbed", "Maximum Honour is 1", "Cannot be used with Trials below level 80", "This item is destroyed when applied to a Trial"] },
    'peacemaker': { id: 'peacemaker', name: "The Peacemaker's Draught", width: 1, height: 3, imageUrl: 'peacemaker.webp', isUnique: true, fixedMods: ["Zarokh, the Temporal drops an additional Barya", "Your Defences are zero", "This item is destroyed when applied to a Trial"] },
    'burden': { id: 'burden', name: 'The Burden of Leadership', width: 3, height: 1, imageUrl: 'burden.webp', isUnique: true, fixedMods: ["Zarokh, the Temporal drops Sekhema's Resolve", "Rooms are unknown on the Trial Map", "This item is destroyed when applied to a Trial"] },
    'tales': { id: 'tales', name: 'The Remembered Tales', width: 2, height: 2, imageUrl: 'tales.webp', isUnique: true, fixedMods: ["Zarokh, the Temporal drops Blessed Bonds", "Cannot have Boons", "This item is destroyed when applied to a Trial"] },
    'alliance': { id: 'alliance', name: 'The Desperate Alliance', width: 1, height: 4, imageUrl: 'alliance.webp', isUnique: true, fixedMods: ["Zarokh, the Temporal drops Against the Darkness", "Zarokh, the Temporal deals 100% more Damage", "Zarokh, the Temporal takes 75% less Damage", "This item is destroyed when applied to a Trial"] },
    'seasons': { id: 'seasons', name: 'The Changing Seasons', width: 2, height: 1, imageUrl: 'seasons.webp', isUnique: true, fixedMods: ["Zarokh, the Temporal drops Sandstorm Visage", "Cannot restore Honour", "This item is destroyed when applied to a Trial"] }
};

const MODIFIERS = {
    prefixes: [
        { id: 'p_life', text: '#% increased maximum Life', min: 5, max: 25, statKey: 'max_life', pool: 'seal_urn' },
        { id: 'p_honour', text: '#% increased maximum Honour', min: 9, max: 30, statKey: 'max_honour', pool: 'seal_urn' },
        { id: 'p_honour_restored', text: '#% increased Honour restored', min: 6, max: 29, statKey: 'honour_restored', pool: 'seal_urn' },
        { id: 'p_sacred_water', text: 'Gain # Sacred Water at start', min: 30, max: 49, statKey: 'start_sacred_water', pool: 'seal_urn' },
        { id: 'p_defences', text: '#% increased Defences', min: 20, max: 70, statKey: 'defences', pool: 'seal_urn' },
        { id: 'p_move_speed', text: '#% increased Movement Speed', min: 3, max: 10, statKey: 'movement_speed', pool: 'seal_urn' },
        { id: 'p_tap_honour', text: '#% increased maximum Honour', min: 17, max: 45, statKey: 'max_honour', pool: 'tapestry' },
        { id: 'p_tap_honour_restored', text: '#% increased Honour restored', min: 16, max: 45, statKey: 'honour_restored', pool: 'tapestry' },
        { id: 'p_tap_rare_dmg_taken', text: 'Rare Monsters take #% inc. Damage', min: 11, max: 30, statKey: 'rare_dmg_taken', pool: 'tapestry' },
        { id: 'p_tap_boss_dmg_taken', text: 'Bosses take #% inc. Damage', min: 11, max: 30, statKey: 'boss_dmg_taken', pool: 'tapestry' },
        { id: 'p_tap_merchant_choice', text: 'The Merchant has # add. Choice(s)', min: 1, max: 1, statKey: 'merchant_choice', pool: 'tapestry' },
        { id: 'p_tap_rare_dmg_dealt', text: 'Rare Monsters deal #% red. Damage', min: 5, max: 10, statKey: 'rare_dmg_dealt', pool: 'tapestry' },
        { id: 'p_tap_boss_dmg_dealt', text: 'Bosses deal #% red. Damage', min: 5, max: 10, statKey: 'boss_dmg_dealt', pool: 'tapestry' },
        { id: 'p_vase_monster_dmg_taken', text: 'Monsters take #% inc. Damage', min: 11, max: 30, statKey: 'monster_dmg_taken', pool: 'vase' },
        { id: 'p_vase_monster_dmg_dealt', text: 'Monsters deal #% red. Damage', min: 6, max: 12, statKey: 'monster_dmg_dealt', pool: 'vase' },
        { id: 'p_vase_extra_key', text: '#% chance for extra Key', min: 7, max: 16, statKey: 'chance_extra_key', pool: 'vase' },
        { id: 'p_vase_monster_speed', text: 'Monsters have #% red. Speed', min: 4, max: 7, statKey: 'monster_reduced_speed', pool: 'vase' },
        { id: 'p_vase_cheat_death', text: '#% chance to survive with 1 Honour', min: 5, max: 12, statKey: 'cheat_death', pool: 'vase' },
        { id: 'p_vase_key_upgrade', text: '#% chance for Keys to upgrade', min: 3, max: 9, statKey: 'chance_key_upgrade', pool: 'vase' }
    ],
    suffixes: [
        { id: 's_monster_water', text: '#% chance to drop double Water', min: 5, max: 15, statKey: 'monster_double_water', pool: 'seal_urn' },
        { id: 's_fountain_water', text: '#% chance for Fountains double Water', min: 5, max: 15, statKey: 'fountain_double_water', pool: 'seal_urn' },
        { id: 's_relic_quant', text: '#% inc. quantity of Relics', min: 6, max: 20, statKey: 'relic_quantity', pool: 'seal_urn' },
        { id: 's_dodge_dist', text: '#m to Dodge Roll distance', min: 0.3, max: 0.7, statKey: 'dodge_distance', pool: 'seal_urn' },
        { id: 's_slow_potency', text: '#% red. Slowing Potency', min: 8, max: 20, statKey: 'reduced_slow', pool: 'seal_urn' },
        { id: 's_crit_dmg', text: '#% red. Critical Damage Bonus taken', min: 12, max: 25, statKey: 'reduced_crit_dmg', pool: 'seal_urn' },
        { id: 's_honour_res', text: '#% to Honour Resistance', min: 8, max: 22, statKey: 'honour_resistance', pool: 'seal_urn' },
        { id: 's_keys_drop', text: '#% inc. quantity of Keys dropped', min: 6, max: 25, statKey: 'key_quantity', pool: 'seal_urn' },
        { id: 's_tap_merchant_prices', text: '#% reduced Merchant Prices', min: 6, max: 10, statKey: 'merchant_prices', pool: 'tapestry' },
        { id: 's_tap_honour_boss', text: 'Restore # Honour on Boss kill', min: 40, max: 150, statKey: 'honour_on_boss', pool: 'tapestry' },
        { id: 's_tap_honour_shrine', text: 'Restore # Honour on Shrine', min: 25, max: 75, statKey: 'honour_on_shrine', pool: 'tapestry' },
        { id: 's_tap_rooms', text: '# add. Room(s) revealed', min: 1, max: 2, statKey: 'additional_rooms', pool: 'tapestry' },
        { id: 's_tap_honour_res', text: '#% to Honour Resistance', min: 15, max: 40, statKey: 'honour_resistance', pool: 'tapestry' },
        { id: 's_vase_water_room', text: 'Gain # Water on Room complete', min: 11, max: 30, statKey: 'water_on_room', pool: 'vase' },
        { id: 's_vase_honour_room', text: 'Restore # Honour on Room complete', min: 10, max: 30, statKey: 'honour_on_room', pool: 'vase' },
        { id: 's_vase_rooms', text: '# add. Rooms revealed', min: 2, max: 4, statKey: 'additional_rooms', pool: 'vase' },
        { id: 's_vase_avoid_affliction', text: '#% chance to Avoid Affliction', min: 6, max: 15, statKey: 'avoid_affliction', pool: 'vase' },
        { id: 's_vase_honour_key', text: 'Restore # Honour on Key pickup', min: 25, max: 75, statKey: 'honour_on_key', pool: 'vase' },
        { id: 's_vase_max_honour_res', text: '#% to Max Honour Resistance', min: 2, max: 5, statKey: 'max_honour_res', pool: 'vase' }
    ]
};


let gridState = {}; 
let instances = {}; 
let savedConfigs = {}; 
let instanceCounter = 0;
let configCounter = 0;
let currentlyDragging = null; 
let craftingInstanceId = null;
let selectedFromClick = null; 


document.addEventListener('DOMContentLoaded', () => {
    generatePalette();
    generateGrid();
    setupTrashZone();
    setupModal();
    renderStats({});
    updateLayoutButtonStates();
});

// Layouts system
function saveLayout(slotNum) {
    const data = { gridState, instances, savedConfigs, instanceCounter, configCounter };
    localStorage.setItem(`sekhemas_layout_${slotNum}`, JSON.stringify(data));
    updateLayoutButtonStates();
    alert(`Layout ${slotNum} guardado correctamente.`);
}

function updateLayoutButtonStates() {
    for (let i = 1; i <= 3; i++) {
        const hasData = localStorage.getItem(`sekhemas_layout_${i}`) !== null;
        const btnSave = document.getElementById(`btn-save-${i}`);
        const btnLoad = document.getElementById(`btn-load-${i}`);
        
        if (btnSave && btnLoad) {
            if (hasData) {
                btnSave.classList.add('has-data');
                btnLoad.classList.add('has-data');
            } else {
                btnSave.classList.remove('has-data');
                btnLoad.classList.remove('has-data');
            }
        }
    }
}

function loadLayout(slotNum) {
    const dataStr = localStorage.getItem(`sekhemas_layout_${slotNum}`);
    if (!dataStr) { alert(`No hay ningún layout guardado en el slot ${slotNum}.`); return; }
    
    clearGrid();
    
    const data = JSON.parse(dataStr);
    gridState = data.gridState || {};
    instances = data.instances || {};
    savedConfigs = data.savedConfigs || {};
    instanceCounter = data.instanceCounter || 0;
    configCounter = data.configCounter || 0;
    
    renderInventory(); 
    
    const processedInsts = new Set();
    for (let slotId in gridState) {
        const instId = gridState[slotId];
        if (!processedInsts.has(instId)) {
            processedInsts.add(instId);
            const inst = instances[instId];
            const base = RELIC_BASES[inst.baseId];
            const targetSlot = document.getElementById(slotId);
            
            const el = document.createElement('div');
            el.classList.add('relic-instance');
            el.id = instId;
            el.style.backgroundImage = `url('${base.imageUrl}')`;
            el.style.setProperty('--w', base.width);
            el.style.setProperty('--h', base.height);
            
            // EVENTOS HÍBRIDOS
            el.addEventListener('dragstart', () => {
                currentlyDragging = { type: 'instance', id: instId, width: base.width, height: base.height };
                setTimeout(() => el.classList.add('dragging'), 0);
            });
            el.addEventListener('dragend', () => el.classList.remove('dragging'));
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                handleSelectClick(el, { type: 'instance', id: instId, width: base.width, height: base.height });
            });
            
            targetSlot.appendChild(el);
            updateTooltip(instId);
        }
    }
    recalculateStats();
}

function clearGrid() {
    document.querySelectorAll('.relic-instance').forEach(el => el.remove());
    gridState = {};
    instances = {};
    recalculateStats();
}

// UI generators
function generatePalette() {
    const basesGrid = document.getElementById('palette-bases');
    const uniquesGrid = document.getElementById('palette-uniques');

    Object.values(RELIC_BASES).forEach(base => {
        const item = document.createElement('div');
        item.classList.add('palette-item');
        item.style.backgroundImage = `url('${base.imageUrl}')`;
        item.setAttribute('draggable', true);
        item.setAttribute('data-tooltip', base.name);
        
        // EVENTOS HÍBRIDOS
        item.addEventListener('dragstart', () => {
            currentlyDragging = { type: 'palette', baseId: base.id, width: base.width, height: base.height };
        });
        item.addEventListener('dragend', clearHighlights);
        item.addEventListener('click', () => {
            handleSelectClick(item, { type: 'palette', baseId: base.id, width: base.width, height: base.height });
        });

        if (base.isUnique) uniquesGrid.appendChild(item);
        else basesGrid.appendChild(item);
    });
}

function generateGrid() {
    const gridContainer = document.getElementById('relic-grid');
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 5; col++) {
            const slot = document.createElement('div');
            slot.classList.add('grid-slot');
            slot.id = `slot_${row}_${col}`;
            
            if ((row === 0 && col === 4) || (row === 3 && col === 0)) slot.classList.add('locked', 'hard-locked');
            else slot.classList.add('empty');

            slot.addEventListener('dragover', handleDragOverGrid);
            slot.addEventListener('drop', handleDropOnGrid);
            slot.addEventListener('click', () => handleSlotClick(slot.id)); // NUEVO
            gridContainer.appendChild(slot);
        }
    }
    gridContainer.addEventListener('dragleave', clearHighlights);
}

// Saved inventory logic
function renderInventory() {
    const list = document.getElementById('palette-inventory');
    list.innerHTML = '';
    
    const keys = Object.keys(savedConfigs);
    if (keys.length === 0) {
        list.innerHTML = '<span style="color: #666; font-size: 0.8rem; font-style: italic;">Craft a relic to save it here.</span>';
        return;
    }

    keys.forEach(confId => {
        const conf = savedConfigs[confId];
        const base = RELIC_BASES[conf.baseId];
        
        const item = document.createElement('div');
        item.className = 'inventory-item';
        item.setAttribute('draggable', true);
        
        let modsHtml = '';
        if (conf.prefix) {
            const pDef = MODIFIERS.prefixes.find(m => m.id === conf.prefix.id);
            modsHtml += `<span class="mod-text">${pDef.text.replaceAll('#', conf.prefix.value)}</span>`;
        }
        if (conf.suffix) {
            const sDef = MODIFIERS.suffixes.find(m => m.id === conf.suffix.id);
            modsHtml += `<span class="mod-text">${sDef.text.replaceAll('#', conf.suffix.value)}</span>`;
        }

        item.innerHTML = `
            <img src="${base.imageUrl}">
            <div class="inventory-item-details">
                <strong>${base.name}</strong>
                ${modsHtml}
            </div>
            <div class="delete-config-btn" onclick="deleteConfig('${confId}')">x</div>
        `;
        
        // EVENTOS HÍBRIDOS
        item.addEventListener('dragstart', () => {
            currentlyDragging = { type: 'config', configId: confId, width: base.width, height: base.height };
        });
        item.addEventListener('dragend', clearHighlights);
        item.addEventListener('click', () => {
            handleSelectClick(item, { type: 'config', configId: confId, width: base.width, height: base.height });
        });
        list.appendChild(item);
    });
}

function deleteConfig(confId) {
    delete savedConfigs[confId];
    renderInventory();
}

// Drag and drop logic
function getSlots(startRow, startCol, width, height) {
    let slots = [];
    for(let r = 0; r < height; r++) {
        for(let c = 0; c < width; c++) slots.push(`slot_${startRow + r}_${startCol + c}`);
    }
    return slots;
}

function canPlace(slots, ignoreInstId) {
    for (let id of slots) {
        const el = document.getElementById(id);
        if (!el || el.classList.contains('locked')) return false;
        if (gridState[id] && gridState[id] !== ignoreInstId) return false;
    }
    return true;
}

function clearHighlights() {
    document.querySelectorAll('.grid-slot').forEach(el => el.classList.remove('dragover', 'drag-invalid', 'placement-ready'));
}

function handleDragOverGrid(e) {
    e.preventDefault(); 
    if (!currentlyDragging) return;
    const targetSlot = e.target.closest('.grid-slot');
    if (!targetSlot) return;

    clearHighlights();
    const [_, r, c] = targetSlot.id.split('_').map(Number);
    const slots = getSlots(r, c, currentlyDragging.width, currentlyDragging.height);
    const isValid = canPlace(slots, currentlyDragging.id); 

    slots.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add(isValid ? 'dragover' : 'drag-invalid');
    });
}

function handleDropOnGrid(e) {
    e.preventDefault();
    if (!currentlyDragging) return;
    clearHighlights();

    const targetSlot = e.target.closest('.grid-slot');
    if (!targetSlot) return;

    const [_, r, c] = targetSlot.id.split('_').map(Number);
    const slots = getSlots(r, c, currentlyDragging.width, currentlyDragging.height);
    
    if (canPlace(slots, currentlyDragging.id)) {
        if (currentlyDragging.type === 'palette') placeNewInstance(targetSlot, slots, currentlyDragging.baseId);
        else if (currentlyDragging.type === 'config') placeInstanceFromConfig(targetSlot, slots, currentlyDragging.configId);
        else if (currentlyDragging.type === 'instance') moveExistingInstance(targetSlot, slots, currentlyDragging.id);
    }
}

// Base instances creation + movement
function placeNewInstance(targetSlot, slotsIds, baseId) {
    instanceCounter++;
    const instId = `inst_${instanceCounter}`;
    const base = RELIC_BASES[baseId];
    
    instances[instId] = { id: instId, baseId: baseId, isUnique: base.isUnique, prefix: null, suffix: null };
    slotsIds.forEach(id => gridState[id] = instId);

    const el = document.createElement('div');
    el.classList.add('relic-instance');
    el.id = instId;
    el.style.backgroundImage = `url('${base.imageUrl}')`;
    el.style.setProperty('--w', base.width);
    el.style.setProperty('--h', base.height);
    
    // EVENTOS HÍBRIDOS
    el.addEventListener('dragstart', () => {
        currentlyDragging = { type: 'instance', id: instId, width: base.width, height: base.height };
        setTimeout(() => el.classList.add('dragging'), 0);
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        handleSelectClick(el, { type: 'instance', id: instId, width: base.width, height: base.height });
    });

    targetSlot.appendChild(el);
    updateGridVisuals();

    if (base.isUnique) {
        updateTooltip(instId);
        recalculateStats();
    } else {
        openModal(instId); 
    }
}


function placeInstanceFromConfig(targetSlot, slotsIds, configId) {
    instanceCounter++;
    const instId = `inst_${instanceCounter}`;
    const config = savedConfigs[configId];
    const base = RELIC_BASES[config.baseId];
    
    instances[instId] = { id: instId, baseId: base.id, isUnique: false, prefix: config.prefix, suffix: config.suffix };
    slotsIds.forEach(id => gridState[id] = instId);

    const el = document.createElement('div');
    el.classList.add('relic-instance');
    el.id = instId;
    el.style.backgroundImage = `url('${base.imageUrl}')`;
    el.style.setProperty('--w', base.width);
    el.style.setProperty('--h', base.height);
    
    // EVENTOS HÍBRIDOS
    el.addEventListener('dragstart', () => {
        currentlyDragging = { type: 'instance', id: instId, width: base.width, height: base.height };
        setTimeout(() => el.classList.add('dragging'), 0);
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        handleSelectClick(el, { type: 'instance', id: instId, width: base.width, height: base.height });
    });

    targetSlot.appendChild(el);
    updateTooltip(instId);
    recalculateStats();
}

function moveExistingInstance(targetSlot, slotsIds, instId) {
    const el = document.getElementById(instId);
    for (let key in gridState) { 
        if (gridState[key] === instId) delete gridState[key]; 
    }
    slotsIds.forEach(id => gridState[id] = instId);
    targetSlot.appendChild(el);
    updateGridVisuals();
}

function setupTrashZone() {
    const tz = document.getElementById('trash-zone');
    tz.addEventListener('dragover', (e) => {
        if(currentlyDragging && currentlyDragging.type === 'instance') { e.preventDefault(); tz.classList.add('dragover'); }
    });
    tz.addEventListener('dragleave', () => tz.classList.remove('dragover'));
    tz.addEventListener('drop', () => {
        tz.classList.remove('dragover');
        if (currentlyDragging && currentlyDragging.type === 'instance') removeInstance(currentlyDragging.id);
    });
    tz.addEventListener('click', () => {
        if(selectedFromClick && selectedFromClick.type === 'instance') {
            removeInstance(selectedFromClick.id);
            clearSelection();
        }
    });
}

function removeInstance(instId) {
    const el = document.getElementById(instId);
    if(el) el.remove();
    for (let key in gridState) { if (gridState[key] === instId) delete gridState[key]; }
    delete instances[instId];
    recalculateStats();
}

// Modal logic
function setupModal() {
    const inputPrefix = document.getElementById('input-prefix-search');
    const inputSuffix = document.getElementById('input-suffix-search');
    
    inputPrefix.addEventListener('input', (e) => {
        const mDef = MODIFIERS.prefixes.find(m => m.text === e.target.value);
        toggleModInput(mDef ? mDef.id : null, 'prefix', MODIFIERS.prefixes);
    });
    
    inputSuffix.addEventListener('input', (e) => {
        const mDef = MODIFIERS.suffixes.find(m => m.text === e.target.value);
        toggleModInput(mDef ? mDef.id : null, 'suffix', MODIFIERS.suffixes);
    });

    document.getElementById('btn-apply-mods').onclick = () => {
        saveModsToInstance();
        document.getElementById('craft-modal').classList.add('hidden');
    };

    document.getElementById('close-modal').onclick = () => {
        removeInstance(craftingInstanceId);
        document.getElementById('craft-modal').classList.add('hidden');
    };
}

function openModal(instId) {
    craftingInstanceId = instId;
    const instance = instances[instId];
    const base = RELIC_BASES[instance.baseId];
    
    document.getElementById('modal-relic-name').innerText = base.name;
    
    const listPrefix = document.getElementById('prefix-datalist');
    const listSuffix = document.getElementById('suffix-datalist');
    
    listPrefix.innerHTML = '';
    MODIFIERS.prefixes.filter(m => m.pool === base.pool).forEach(p => {
        listPrefix.innerHTML += `<option value="${p.text}">`;
    });
    
    listSuffix.innerHTML = '';
    MODIFIERS.suffixes.filter(m => m.pool === base.pool).forEach(s => {
        listSuffix.innerHTML += `<option value="${s.text}">`;
    });

    document.getElementById('input-prefix-search').value = '';
    document.getElementById('input-suffix-search').value = '';

    document.getElementById('prefix-val-group').classList.add('hidden');
    document.getElementById('suffix-val-group').classList.add('hidden');
    document.getElementById('craft-modal').classList.remove('hidden');
}

function toggleModInput(modId, type, modArray) {
    const group = document.getElementById(`${type}-val-group`);
    if (!modId) { group.classList.add('hidden'); return; }
    const mDef = modArray.find(m => m.id === modId);
    const input = document.getElementById(`input-${type}-val`);
    input.value = mDef.min; input.min = mDef.min; input.max = mDef.max;
    input.step = mDef.min < 1 ? "0.1" : "1";
    if (mDef.min === mDef.max) group.classList.add('hidden');
    else {
        document.getElementById(`${type}-range`).innerText = `${mDef.min} to ${mDef.max}`;
        group.classList.remove('hidden');
    }
}

function saveModsToInstance() {
    const instance = instances[craftingInstanceId];
    
    const pText = document.getElementById('input-prefix-search').value;
    const sText = document.getElementById('input-suffix-search').value;
    
    const pDef = MODIFIERS.prefixes.find(m => m.text === pText);
    const sDef = MODIFIERS.suffixes.find(m => m.text === sText);
    
    instance.prefix = pDef ? { id: pDef.id, value: parseFloat(document.getElementById('input-prefix-val').value) } : null;
    instance.suffix = sDef ? { id: sDef.id, value: parseFloat(document.getElementById('input-suffix-val').value) } : null;

    if (!instance.isUnique && (instance.prefix || instance.suffix)) {
        configCounter++;
        const confId = `conf_${configCounter}`;
        savedConfigs[confId] = { configId: confId, baseId: instance.baseId, prefix: instance.prefix, suffix: instance.suffix };
        renderInventory();
    }

    updateTooltip(craftingInstanceId);
    recalculateStats();
}

function updateTooltip(instId) {
    const instance = instances[instId];
    const base = RELIC_BASES[instance.baseId];
    let text = `${base.name}\n`;
    
    if (instance.isUnique) {
        text += `\n` + base.fixedMods.join('\n');
    } else {
        if (instance.prefix) {
            const m = MODIFIERS.prefixes.find(x => x.id === instance.prefix.id);
            text += `\n${m.text.replaceAll('#', instance.prefix.value)}`;
        }
        if (instance.suffix) {
            const m = MODIFIERS.suffixes.find(x => x.id === instance.suffix.id);
            text += `\n${m.text.replaceAll('#', instance.suffix.value)}`;
        }
    }
    document.getElementById(instId).setAttribute('data-tooltip', text);
}

// Stats
function recalculateStats() {
    let totals = {}; 
    const activeInstances = [...new Set(Object.values(gridState))];

    activeInstances.forEach(instId => {
        const instance = instances[instId];
        const base = RELIC_BASES[instance.baseId];
        
        if (instance.isUnique) {
            base.fixedMods.forEach((mod, idx) => {
                totals[`unique_${base.id}_${idx}`] = { textTemplate: mod, isUniqueText: true };
            });
        } else {
            [instance.prefix, instance.suffix].forEach(mod => {
                if (!mod) return;
                let modDef = MODIFIERS.prefixes.find(m => m.id === mod.id) || MODIFIERS.suffixes.find(m => m.id === mod.id);
                if (!totals[modDef.statKey]) totals[modDef.statKey] = { total: 0, textTemplate: modDef.text };
                totals[modDef.statKey].total += mod.value;
            });
        }
    });
    renderStats(totals);
    updateGridVisuals();
}

function renderStats(totals) {
    const listEl = document.getElementById('stats-list');
    listEl.innerHTML = '';
    const keys = Object.keys(totals);
    if (keys.length === 0) {
        listEl.innerHTML = '<span class="empty-stats">No bonuses active.</span>';
        return;
    }

    keys.forEach(key => {
        const data = totals[key];
        const el = document.createElement('div');
        if (data.isUniqueText) {
            el.innerText = data.textTemplate;
            el.className = 'stat-unique';
        } else {
            const val = Number.isInteger(data.total) ? data.total : data.total.toFixed(1);
            el.innerText = data.textTemplate.replaceAll('#', val);
            el.className = 'stat-magic';
        }
        listEl.appendChild(el);
    });
}

function updateGridVisuals() {
    document.querySelectorAll('.grid-slot').forEach(slot => {
        if (gridState[slot.id]) {
            slot.classList.add('occupied');
        } else {
            slot.classList.remove('occupied');
        }
    });
}


function handleSelectClick(element, data) {
    if (selectedFromClick && (selectedFromClick.id === data.id || selectedFromClick.baseId === data.baseId || selectedFromClick.configId === data.configId)) {
        clearSelection();
        return;
    }

    clearSelection();
    
    selectedFromClick = { ...data, element: element };
    element.classList.add('selected');
    
    if (data.type === 'instance') element.style.opacity = "0.5";
    
    document.querySelectorAll('.grid-slot:not(.locked)').forEach(s => s.classList.add('placement-ready'));
}

function handleSlotClick(slotId) {
    if (!selectedFromClick) return;

    const [_, r, c] = slotId.split('_').map(Number);
    const slots = getSlots(r, c, selectedFromClick.width, selectedFromClick.height);
    const targetSlot = document.getElementById(slotId);

    if (canPlace(slots, selectedFromClick.id)) {
        if (selectedFromClick.type === 'palette') {
            placeNewInstance(targetSlot, slots, selectedFromClick.baseId);
        } else if (selectedFromClick.type === 'config') {
            placeInstanceFromConfig(targetSlot, slots, selectedFromClick.configId);
        } else if (selectedFromClick.type === 'instance') {
            moveExistingInstance(targetSlot, slots, selectedFromClick.id);
        }
        clearSelection();
    } else {
        targetSlot.classList.add('drag-invalid');
        setTimeout(() => targetSlot.classList.remove('drag-invalid'), 300);
    }
}

function clearSelection() {
    if (selectedFromClick && selectedFromClick.element) {
        selectedFromClick.element.classList.remove('selected');
        selectedFromClick.element.style.opacity = "1";
    }
    selectedFromClick = null;
    document.querySelectorAll('.grid-slot').forEach(s => s.classList.remove('placement-ready'));
}

window.addEventListener('keydown', (e) => { if (e.key === 'Escape') clearSelection(); });