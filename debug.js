        // --- CONFIG ---
        const WORKER_URL = "https://hypixel-bazaar-proxy.johnsmith83191.workers.dev";

        // Items for Lapis Corpse
        const DROP_TABLE = [
            { name: "Umber Key", id: "UMBER_KEY", qty: 1, chance: 0.04 },
            { name: "Tungsten Key", id: "TUNGSTEN_KEY", qty: 1, chance: 0.04 },
            { name: "Refined Umber", id: "REFINED_UMBER", qty: 1, chance: 0.1 },
            { name: "Refined Tungsten", id: "REFINED_TUNGSTEN", qty: 1, chance: 0.1 },
            { name: "Refined Mithril", id: "REFINED_MITHRIL", qty: 1, chance: 0.14 },
            { name: "Refined Titanium", id: "REFINED_TITANIUM", qty: 1, chance: 0.14 },
            { name: "Glacite Amalgamation", id: "GLACITE_AMALGAMATION", qty: 1, chance: 0.2 },
            { name: "Bejeweled Handle", id: "BEJEWELED_HANDLE", qty: 1, chance: 0.301 },
            { name: "Enchanted Umber (4)", id: "ENCHANTED_UMBER", qty: 4, chance: 0.401 },
            { name: "Enchanted Tungsten (4)", id: "ENCHANTED_TUNGSTEN", qty: 4, chance: 0.401 },
            { name: "Enchanted Glacite (4)", id: "ENCHANTED_GLACITE", qty: 4, chance: 0.401 },
            { name: "Green Goblin Egg (4)", id: "GOBLIN_EGG_GREEN", qty: 4, chance: 0.703 },
            { name: "Yellow Goblin Egg (4)", id: "GOBLIN_EGG_YELLOW", qty: 4, chance: 0.703 },
            { name: "Red Goblin Egg (4)", id: "GOBLIN_EGG_RED", qty: 4, chance: 0.703 },
            { name: "Goblin Egg (4)", id: "GOBLIN_EGG", qty: 4, chance: 0.803 },
            { name: "Fine Onyx Gem (2)", id: "FINE_ONYX_GEM", qty: 2, chance: 1.004 },
            { name: "Fine Peridot Gem (2)", id: "FINE_PERIDOT_GEM", qty: 2, chance: 1.004 },
            { name: "Fine Citrine Gem (2)", id: "FINE_CITRINE_GEM", qty: 2, chance: 1.004 },
            { name: "Fine Aquamarine Gem (2)", id: "FINE_AQUAMARINE_GEM", qty: 2, chance: 1.004 },
            { name: "Suspicious Scrap", id: "SUSPICIOUS_SCRAP", qty: 1, chance: 1.004 },
            { name: "Enchanted Umber (2)", id: "ENCHANTED_UMBER", qty: 2, chance: 1.004 },
            { name: "Enchanted Tungsten (2)", id: "ENCHANTED_TUNGSTEN", qty: 2, chance: 1.004 },
            { name: "Enchanted Glacite (2)", id: "ENCHANTED_GLACITE", qty: 2, chance: 1.004 },
            { name: "Glacite Jewel (2)", id: "GLACITE_JEWEL", qty: 2, chance: 1.004 },
            { name: "Green Goblin Egg (2)", id: "GOBLIN_EGG_GREEN", qty: 2, chance: 1.406 },
            { name: "Yellow Goblin Egg (2)", id: "GOBLIN_EGG_YELLOW", qty: 2, chance: 1.406 },
            { name: "Red Goblin Egg (2)", id: "GOBLIN_EGG_RED", qty: 2, chance: 1.406 },
            { name: "Goblin Egg (2)", id: "GOBLIN_EGG", qty: 2, chance: 1.607 },
            { name: "Fine Onyx Gem", id: "FINE_ONYX_GEM", qty: 1, chance: 2.008 },
            { name: "Fine Peridot Gem", id: "FINE_PERIDOT_GEM", qty: 1, chance: 2.008 },
            { name: "Fine Citrine Gem", id: "FINE_CITRINE_GEM", qty: 1, chance: 2.008 },
            { name: "Fine Aquamarine Gem", id: "FINE_AQUAMARINE_GEM", qty: 1, chance: 2.008 },
            { name: "Enchanted Umber", id: "ENCHANTED_UMBER", qty: 1, chance: 2.008 },
            { name: "Enchanted Tungsten", id: "ENCHANTED_TUNGSTEN", qty: 1, chance: 2.008 },
            { name: "Enchanted Glacite", id: "ENCHANTED_GLACITE", qty: 1, chance: 2.008 },
            { name: "Glacite Jewel", id: "GLACITE_JEWEL", qty: 1, chance: 2.008 },
            { name: "Green Goblin Egg", id: "GOBLIN_EGG_GREEN", qty: 1, chance: 2.812 },
            { name: "Yellow Goblin Egg", id: "GOBLIN_EGG_YELLOW", qty: 1, chance: 2.812 },
            { name: "Red Goblin Egg", id: "GOBLIN_EGG_RED", qty: 1, chance: 2.812 },
            { name: "Flawed Onyx Gem (40)", id: "FLAWED_ONYX_GEM", qty: 40, chance: 3.013 },
            { name: "Flawed Peridot Gem (40)", id: "FLAWED_PERIDOT_GEM", qty: 40, chance: 3.013 },
            { name: "Flawed Citrine Gem (40)", id: "FLAWED_CITRINE_GEM", qty: 40, chance: 3.013 },
            { name: "Flawed Aquamarine Gem (40)", id: "FLAWED_AQUAMARINE_GEM", qty: 40, chance: 3.013 },
            { name: "Goblin Egg", id: "GOBLIN_EGG", qty: 1, chance: 3.214 },
            { name: "Flawed Onyx Gem (20)", id: "FLAWED_ONYX_GEM", qty: 20, chance: 4.017 },
            { name: "Flawed Peridot Gem (20)", id: "FLAWED_PERIDOT_GEM", qty: 20, chance: 4.017 },
            { name: "Flawed Citrine Gem (20)", id: "FLAWED_CITRINE_GEM", qty: 20, chance: 4.017 },
            { name: "Flawed Aquamarine Gem (20)", id: "FLAWED_AQUAMARINE_GEM", qty: 20, chance: 4.017 },
            { name: "Flawed Onyx Gem (10)", id: "FLAWED_ONYX_GEM", qty: 10, chance: 6.026 },
            { name: "Flawed Peridot Gem (10)", id: "FLAWED_PERIDOT_GEM", qty: 10, chance: 6.026 },
            { name: "Flawed Citrine Gem (10)", id: "FLAWED_CITRINE_GEM", qty: 10, chance: 6.026 },
            { name: "Flawed Aquamarine Gem (10)", id: "FLAWED_AQUAMARINE_GEM", qty: 10, chance: 6.026 },
        ];

        // Items for Gem Calculation (Flawless)
        const GEM_IDS = [
            "FLAWLESS_JADE_GEM",
            "FLAWLESS_AMBER_GEM",
            "FLAWLESS_AMETHYST_GEM",
            "FLAWLESS_SAPPHIRE_GEM"
        ];

        // Jasper item ID for jasper shaft calculations
        const JASPER_ID = "FLAWLESS_JASPER_GEM";

        let myChart = null;
        let lifetimeSum = 0;
        let lifetimeCount = 0;
        let bazaarData = null;

        // Global storage for jasper economy calculations
        let jasperEconomyData = {
            jasperShaftsPerHour: 0,
            time0: 0, time1Total: 0, time2Total: 0,
            coinsHr0: 0, coinsHr1: 0, coinsHr2: 0,
            campfireCost: 0,
            jasperPrice: 0,
            avgFines: 0,
            // Additional data for crystals and pristine bonus
            shaftsPerHour: 0,
            gemChanceDecimal: 0,
            pristine: 0,
            // Normal breakdown values (stored for adjustment)
            lapisProfitHr: 0, lapisPerHour: 0, lapisValuePerCorpse: 0,
            gemProfitHr: 0, blocksPerHour: 0,
            glaciteProfitHr: 0, pct3: 0,
            mainPetProfitHr: 0, mainPetXPPerHour: 0,
            expShareProfitHr: 0, expShareXPPerHour: 0,
            dmcLevel: 0
        };

        // Tab switching function
        // Tab switching function
        let currentBreakdownTab = 'jasper'; // Default

        function switchBreakdownTab(tab) {
            currentBreakdownTab = tab;
            const normalDiv = document.getElementById('breakdownNormal');
            const jasperDiv = document.getElementById('breakdownJasper');
            const tabNormal = document.getElementById('tabNormal');
            const tabJasper = document.getElementById('tabJasper');
            const totalProfitEl = document.getElementById('totalProfit');

            if (tab === 'normal') {
                normalDiv.classList.remove('hidden');
                jasperDiv.classList.add('hidden');
                tabNormal.classList.remove('bg-slate-700', 'text-slate-400');
                tabNormal.classList.add('bg-cyan-600', 'text-white');
                tabJasper.classList.remove('bg-amber-600', 'text-white');
                tabJasper.classList.add('bg-slate-700', 'text-slate-400');

                // Update Total Profit Tile to Spawning Profit
                // We need to re-fetch the value from the DOM or storage
                const normalTotal = document.getElementById('bdTotalVal').innerText || '--';
                totalProfitEl.innerText = normalTotal;
                totalProfitEl.classList.remove('text-amber-300');
                totalProfitEl.classList.add('text-cyan-300');

            } else {
                normalDiv.classList.add('hidden');
                jasperDiv.classList.remove('hidden');
                tabNormal.classList.remove('bg-cyan-600', 'text-white');
                tabNormal.classList.add('bg-slate-700', 'text-slate-400');
                tabJasper.classList.remove('bg-slate-700', 'text-slate-400');
                tabJasper.classList.add('bg-amber-600', 'text-white');

                updateJasperEconomyBreakdown();
                // Tile color update handled in updateJasperEconomyBreakdown
                totalProfitEl.classList.remove('text-cyan-300');
                totalProfitEl.classList.add('text-amber-300');
            }
        }

        // Jasper Economy breakdown calculation
        function updateJasperEconomyBreakdown() {
            try {
                const campfires = parseInt(document.getElementById('jasperCampfireSelect').value) || 0;
                const data = jasperEconomyData;
                const applyPristineBonus = document.getElementById('jasperPristineBonus').checked;
                const includeCrystals = document.getElementById('includeCrystals').checked;
                const crystalClaimTime = parseFloat(document.getElementById('crystalClaimTime').value) || 0;

                if (!data || data.jasperShaftsPerHour <= 0 || data.time0 <= 0) {
                    return; // No data yet
                }

                // Select time and profit based on campfire selection
                let timePerShaft, jasperProfitPerShaft;
                if (campfires === 0) {
                    timePerShaft = data.time0;
                    jasperProfitPerShaft = (data.jasperPrice / 80) * data.avgFines;
                } else if (campfires === 1) {
                    timePerShaft = data.time1Total;
                    const totalFines1 = data.avgFines * (data.time1Total / data.time0);
                    jasperProfitPerShaft = (data.jasperPrice / 80) * totalFines1 - data.campfireCost;
                } else {
                    timePerShaft = data.time2Total;
                    const totalFines2 = data.avgFines * (data.time2Total / data.time0);
                    jasperProfitPerShaft = (data.jasperPrice / 80) * totalFines2 - (data.campfireCost * 2);
                }

                // Apply Pristine Bonus if enabled
                // Lapis corpses in jasper: 1.25 + DMC, so bonus pristine = 0.25 + DMC
                // Multiplier = (1 + (P + Bonus) * 0.79) / (1 + P * 0.79)
                if (applyPristineBonus) {
                    // Lapis corpses: 2×0.5 + 0.5×0.5 + (DMC%/2) = 1.25 + (dmcLevel×0.01×0.5)
                    const lapisPerShaft = (0.5 * 2) + (0.5 * 0.5) + (data.dmcLevel * 0.01 * 0.5);
                    const bonusPristine = lapisPerShaft - 1; // Extra pristine from corpses beyond the first
                    const pristine = data.pristine || 0;
                    const pristineMult = (1 + (pristine + bonusPristine) * 0.79) / (1 + pristine * 0.79);
                    jasperProfitPerShaft = jasperProfitPerShaft * pristineMult;
                }

                // Time calculations
                // Calculate actual jasper shafts you can do per hour
                // = 3600 / (spawn_time + time_in_shaft)
                // spawn_time = 3600 / raw_jasper_shafts_per_hour
                const spawnTimePerJasper = 3600 / data.jasperShaftsPerHour; // seconds to spawn one jasper shaft
                const cycleTime = spawnTimePerJasper + timePerShaft; // total cycle: spawn + mine
                const actualJasperShaftsPerHour = 3600 / cycleTime;

                const timeInJasperPerHour = actualJasperShaftsPerHour * timePerShaft; // seconds spent in jasper shafts
                let normalActivityTime = Math.max(0, 3600 - timeInJasperPerHour);

                // Jasper shaft profits (using actual shafts per hour)
                const jasperProfitHr = actualJasperShaftsPerHour * jasperProfitPerShaft;

                // Lapis in jasper shafts: 2×0.5 + 0.5×0.5 + (DMC%/2) = 1.25 + (dmcLevel×0.01×0.5)
                const lapisPerJasperShaft = (0.5 * 2) + (0.5 * 0.5) + (data.dmcLevel * 0.01 * 0.5);
                const lapisInJasperPerHour = actualJasperShaftsPerHour * lapisPerJasperShaft;
                const lapisInJasperProfit = lapisInJasperPerHour * data.lapisValuePerCorpse;

                // Crystal calculations
                let crystalProfitOnyx = 0, crystalProfitPeridot = 0;
                let onyxPerHour = 0, peridotPerHour = 0;

                if (includeCrystals && bazaarData) {
                    // Crystal shaft odds: 0.0625 × 1/5 for non-gem, 0.04444 × 1/5 for gem
                    // Each type (onyx, peridot) is rolled separately
                    const nonGemRate = 1 - (data.gemChanceDecimal || 0);
                    const gemRate = data.gemChanceDecimal || 0;
                    const crystalRateNonGem = 0.0625 * (1 / 5);
                    const crystalRateGem = 0.04444 * (1 / 5);

                    // Per-type crystal shafts per hour (same for onyx and peridot)
                    // data.shaftsPerHour is already globally adjusted for crystal claiming time
                    const rawCrystalShaftsPerHour = data.shaftsPerHour * ((nonGemRate * crystalRateNonGem) + (gemRate * crystalRateGem));
                    const actualCrystalShaftsPerHour = rawCrystalShaftsPerHour;

                    // Onyx profit: PERFECT_ONYX_GEM (sell offer) - 5*FLAWLESS_ONYX_GEM (buy) - 1.4M
                    const perfectOnyxPrice = bazaarData['PERFECT_ONYX_GEM']?.quick_status.sellPrice || 0;
                    const flawlessOnyxPrice = bazaarData['FLAWLESS_ONYX_GEM']?.quick_status.buyPrice || 0;
                    const onyxProfitEach = perfectOnyxPrice - (5 * flawlessOnyxPrice) - 1400000;

                    // Peridot profit: PERFECT_PERIDOT_GEM (sell offer) - 5*FLAWLESS_PERIDOT_GEM (buy) - 1.4M
                    const perfectPeridotPrice = bazaarData['PERFECT_PERIDOT_GEM']?.quick_status.sellPrice || 0;
                    const flawlessPeridotPrice = bazaarData['FLAWLESS_PERIDOT_GEM']?.quick_status.buyPrice || 0;
                    const peridotProfitEach = perfectPeridotPrice - (5 * flawlessPeridotPrice) - 1400000;

                    onyxPerHour = actualCrystalShaftsPerHour * 0.5;
                    peridotPerHour = actualCrystalShaftsPerHour * 0.5;

                    crystalProfitOnyx = onyxPerHour * Math.max(0, onyxProfitEach);
                    crystalProfitPeridot = peridotPerHour * Math.max(0, peridotProfitEach);

                    // Note: normalActivityTime deduction is NOT needed because shaftsPerHour is already reduced globally.
                }

                const adjustmentFactor = normalActivityTime / 3600;

                // Adjusted normal profits
                const adjustedLapisProfit = data.lapisProfitHr * adjustmentFactor;
                const adjustedLapisPerHour = data.lapisPerHour * adjustmentFactor;
                const adjustedGemProfit = data.gemProfitHr * adjustmentFactor;
                const adjustedBlocksPerHour = data.blocksPerHour * adjustmentFactor;
                const adjustedGlaciteProfit = data.glaciteProfitHr * adjustmentFactor;
                const adjustedMainPetProfit = data.mainPetProfitHr * adjustmentFactor;
                const adjustedMainPetXP = data.mainPetXPPerHour * adjustmentFactor;
                const adjustedExpShareProfit = data.expShareProfitHr * adjustmentFactor;
                const adjustedExpShareXP = data.expShareXPPerHour * adjustmentFactor;

                // Total Jasper Economy
                let totalJasperEconomy = jasperProfitHr + lapisInJasperProfit + adjustedLapisProfit +
                    adjustedGemProfit + adjustedGlaciteProfit + adjustedMainPetProfit + adjustedExpShareProfit;

                if (includeCrystals) {
                    // Crystals are part of "Normal Activity", so scale them too.
                    totalJasperEconomy += (crystalProfitOnyx + crystalProfitPeridot) * adjustmentFactor;
                }

                // Update UI
                document.getElementById('jeTimeInShaft').innerText = timePerShaft.toFixed(0);
                document.getElementById('jeJasperCount').innerText = actualJasperShaftsPerHour.toFixed(2);
                document.getElementById('jeJasperVal').innerText = formatNumber(jasperProfitHr);

                document.getElementById('jeLapisInJasper').innerText = lapisInJasperPerHour.toFixed(1);
                document.getElementById('jeLapisInJasperVal').innerText = formatNumber(lapisInJasperProfit);

                document.getElementById('jeLapisCount').innerText = adjustedLapisPerHour.toFixed(1) + ' corpses/hr';
                document.getElementById('jeLapisVal').innerText = formatNumber(adjustedLapisProfit);

                document.getElementById('jeGemCount').innerText = formatNumber(adjustedBlocksPerHour);
                document.getElementById('jeGemVal').innerText = formatNumber(adjustedGemProfit);

                document.getElementById('jeGlaciteSplit').innerText = (data.pct3 * 100 * adjustmentFactor).toFixed(0) + '% effective';
                document.getElementById('jeGlaciteVal').innerText = formatNumber(adjustedGlaciteProfit);

                document.getElementById('jeMainPetXP').innerText = formatNumber(adjustedMainPetXP);
                document.getElementById('jeMainPetVal').innerText = formatNumber(adjustedMainPetProfit);

                document.getElementById('jeExpShareXP').innerText = formatNumber(adjustedExpShareXP);
                document.getElementById('jeExpShareVal').innerText = formatNumber(adjustedExpShareProfit);

                // Crystal rows visibility and values
                const onyxRow = document.getElementById('jeCrystalRowOnyx');
                const peridotRow = document.getElementById('jeCrystalRowPeridot');
                if (includeCrystals) {
                    onyxRow.classList.remove('hidden');
                    peridotRow.classList.remove('hidden');
                    document.getElementById('jeOnyxCount').innerText = (onyxPerHour * adjustmentFactor).toFixed(2);
                    document.getElementById('jeOnyxVal').innerText = formatNumber(crystalProfitOnyx * adjustmentFactor);
                    document.getElementById('jePeridotCount').innerText = (peridotPerHour * adjustmentFactor).toFixed(2);
                    document.getElementById('jePeridotVal').innerText = formatNumber(crystalProfitPeridot * adjustmentFactor);
                } else {
                    onyxRow.classList.add('hidden');
                    peridotRow.classList.add('hidden');
                }

                document.getElementById('jeTimeAvailable').innerText = (adjustmentFactor * 100).toFixed(1);
                document.getElementById('jeTotalVal').innerText = formatNumber(totalJasperEconomy);

                // Update Main Total Profit Tile if Jasper tab is active
                if (currentBreakdownTab === 'jasper') {
                    const totalProfitEl = document.getElementById('totalProfit');
                    totalProfitEl.innerText = formatNumber(totalJasperEconomy);
                    totalProfitEl.classList.remove('text-cyan-300');
                    totalProfitEl.classList.add('text-amber-300');
                }
            } catch (e) {
                console.error('Jasper Economy calculation error:', e);
            }
        }

        // --- INIT ---
        window.addEventListener('load', () => {
            fetchBazaarPrices();
        });

        async function fetchBazaarPrices() {
            const apiStatus = document.getElementById('apiStatus');
            try {
                const response = await fetch(WORKER_URL + "?t=" + Date.now());
                if (!response.ok) throw new Error("Worker Error");
                const data = await response.json();
                if (!data.success) throw new Error("API Success False");

                bazaarData = data.products;
                apiStatus.classList.remove('bg-red-500', 'animate-pulse');
                apiStatus.classList.add('bg-emerald-500');
            } catch (e) {
                console.error(e);
                apiStatus.classList.remove('bg-red-500');
                apiStatus.classList.add('bg-orange-500');
                document.getElementById('priceModeStatus').innerText = "Offline Mode (Prices Unavailable)";
            }
        }



        function resetGlobalData() {
            lifetimeSum = 0;
            lifetimeCount = 0;
            document.getElementById('globalAvgStat').innerText = "--";
            alert("Session Data Reset");
        }

        function toggleAdvanced() {
            const el = document.getElementById('advancedSettings');
            el.classList.toggle('hidden');
            const arrow = document.getElementById('advArrow');
            arrow.innerText = el.classList.contains('hidden') ? "▼" : "▲";
        }

        function startCompute() {
            document.getElementById('statusTag').classList.remove('hidden');
            document.getElementById('controlPanel').classList.add('processing');
            setTimeout(runSimulation, 50);
        }

        function formatNumber(num) {
            if (num >= 1000000) return (num / 1000000).toFixed(2) + "M";
            if (num >= 1000) return (num / 1000).toFixed(1) + "k";
            return num.toFixed(0);
        }

        // --- ECONOMICS & PROFIT ---
        function calculateEconomics(avgSpawnTime, avgBlocksMined, gemChanceDecimal, pickobulusCounts) {
            // 1. Get Settings
            const dmcLvl = parseInt(document.getElementById('dmcLevel').value) || 0;
            const gftdLevel = parseInt(document.getElementById('gftdLevel').value) || 0;
            const useSellOrder = document.getElementById('useSellOrder').checked;

            // Player Stats
            const fortune = parseFloat(document.getElementById('miningFortune').value) || 0;
            const pristine = parseFloat(document.getElementById('pristine').value) || 0;
            const dwarvenMetalFortune = parseFloat(document.getElementById('dwarvenMetalFortune').value) || 0;

            // Price Key for Lapis Corpse
            const priceKey = useSellOrder ? 'buyPrice' : 'sellPrice';
            const priceMode = useSellOrder ? "Lapis: Sell Offers" : "Lapis: Insta-Sell";

            // Separate Price Key for Spawning Gems
            const useGemSellOrder = document.getElementById('useGemSellOrder').checked;
            const gemPriceKey = useGemSellOrder ? 'buyPrice' : 'sellPrice';
            const gemPriceMode = useGemSellOrder ? " | Gems: Sell Offers" : " | Gems: Insta-Sell";

            document.getElementById('priceModeStatus').innerText = priceMode + gemPriceMode;

            // Crystal Settings (Fix for ReferenceError)
            const includeCrystals = document.getElementById('includeCrystals').checked;
            const crystalClaimTime = parseFloat(document.getElementById('crystalClaimTime').value) || 0;

            // Downtime
            const tPick = parseFloat(document.getElementById('tPick').value) || 4;
            const tEnter = parseFloat(document.getElementById('tEnter').value) || 3;
            const tFall = parseFloat(document.getElementById('tFall').value) || 1.5;
            const tExit = parseFloat(document.getElementById('tExit').value) || 0.5;
            const fixedDowntime = tPick + tEnter + tFall + tExit;

            // Loot Times
            const lootTimes = [
                parseFloat(document.getElementById('loot0').value) || 1,
                parseFloat(document.getElementById('loot1').value) || 5,
                parseFloat(document.getElementById('loot2').value) || 9,
                parseFloat(document.getElementById('loot3').value) || 13,
                parseFloat(document.getElementById('loot4').value) || 17
            ];

            // Bad Spawn Rates
            const bad1 = (parseFloat(document.getElementById('bad1').value) || 25) / 100;
            const bad2 = (parseFloat(document.getElementById('bad2').value) || 20) / 100;
            const bad3 = (parseFloat(document.getElementById('bad3').value) || 5) / 100;

            // --- A. LAPIS CORPSE CALC ---
            let dist = [0.25, 0.50, 0.25, 0, 0];
            let newDist = [0, 0, 0, 0, 0];
            for (let i = 0; i < 3; i++) {
                newDist[i] += dist[i] * 0.75;
                newDist[i + 1] += dist[i] * 0.25;
            }
            dist = [...newDist];

            const pDMC = (dmcLvl / 100) * 0.5;
            newDist = [0, 0, 0, 0, 0];
            for (let i = 0; i < 4; i++) {
                newDist[i] += dist[i] * (1 - pDMC);
                newDist[i + 1] += dist[i] * pDMC;
            }
            dist = [...newDist];

            let finalDist = [...dist];
            let shift = dist[1] * bad1; finalDist[1] -= shift; finalDist[0] += shift;
            shift = dist[2] * bad2; finalDist[2] -= shift; finalDist[1] += shift;
            shift = dist[3] * bad3; finalDist[3] -= shift; finalDist[2] += shift;



            let expectedLapis = 0;
            let expectedLootTime = 0;
            for (let k = 0; k <= 4; k++) {
                expectedLapis += k * finalDist[k];
                expectedLootTime += lootTimes[k] * finalDist[k];
            }

            // Global Crystal Logic: Adjust cycle time for crystal claiming if enabled
            let crystalTimePenalty = 0;
            let crystalChance = 0;
            if (includeCrystals) {
                // Crystal Chance = (GemSpawn% * 0.04444 * 1/5) + (NonGem% * 0.0625 * 1/5)
                // Note: gemChanceDecimal is calculated later (line 1205 in original), need it here?
                // No, line 1205 is where it was defined. I need to move gemChanceDecimal calculation UP or duplicate logic?
                // It relies on calculateTheory.
                // calculateTheory(bonus, timeInput) is called at line 1204 in original.
                // I should move this calculation up or estimate it. 
                // Actually, cycleTime determines shaftsPerHour, which determines gemProfit... 
                // But gemChance depends on run simulation (time per run). 
                // Wait, calculateTheory uses `timeInput` (targetTime). It does NOT depend on cycleTime.
                // So I can move calculateTheory up!
            }

            // Re-ordering logic to get gemChanceDecimal early
            const bonus = parseFloat(document.getElementById('pctInput').value) || 0;
            const targetTime = parseFloat(document.getElementById('timeInput').value) || 60;
            const theory = calculateTheory(bonus, targetTime);
            const gemChanceDecimal = theory.gemPercent / 100;

            if (includeCrystals) {
                crystalChance = (gemChanceDecimal * 0.04444 * 0.2) + ((1 - gemChanceDecimal) * 0.0625 * 0.2);
                crystalTimePenalty = crystalChance * crystalClaimTime;
                console.log(" Gem Spawn Chance:", gemChanceDecimal.toFixed(4));
                console.log(" Crystal Probability:", crystalChance.toFixed(5));
                console.log(" Added Time/Cycle (Avg):", crystalTimePenalty.toFixed(4));
            }

            const cycleTime = avgSpawnTime + fixedDowntime + expectedLootTime + crystalTimePenalty;
            const shaftsPerHour = 3600 / cycleTime;
            const lapisPerHour = shaftsPerHour * expectedLapis;

            document.getElementById('shaftsPerHr').innerText = shaftsPerHour.toFixed(1);
            document.getElementById('cycleTime').innerText = cycleTime.toFixed(1);

            // --- B. JASPER SHAFTS ---
            // Formula: (Shafts * (1-Gem%) * 0.0625) + (Shafts * Gem% * 0.04444)
            const jasperTotal = (shaftsPerHour * (1 - gemChanceDecimal) * 0.0625) +
                (shaftsPerHour * gemChanceDecimal * 0.04444);
            const crystalShafts = jasperTotal * 0.2;
            const nonCrystalShafts = jasperTotal - crystalShafts;

            document.getElementById('jasperShafts').innerText = nonCrystalShafts.toFixed(2);
            document.getElementById('crystalShafts').innerText = crystalShafts.toFixed(2);

            // --- C. PROFIT CALCULATION ---
            if (bazaarData) {
                // 1. Lapis Profit
                let evPerRoll = 0;
                DROP_TABLE.forEach(drop => {
                    const product = bazaarData[drop.id];
                    if (product) {
                        const price = product.quick_status[priceKey] || 0;
                        evPerRoll += price * drop.qty * (drop.chance / 100);
                    }
                });
                const baseRolls = 4.5;
                const bonusRolls = gftdLevel * 0.002;
                const totalRolls = baseRolls + bonusRolls;
                const valuePerCorpse = evPerRoll * totalRolls;
                const lapisProfitHr = lapisPerHour * valuePerCorpse;

                // 2. Gemstone Profit - NEW FORMULA: E = B * (1 + M/100) * (1 + P*0.79) * S
                let sumGemPrice = 0;
                let validGems = 0;
                GEM_IDS.forEach(id => {
                    if (bazaarData[id]) {
                        // Use gemPriceKey (separate from lapis toggle)
                        const p = bazaarData[id].quick_status[gemPriceKey];
                        if (p > 0) {
                            sumGemPrice += p;
                            validGems++;
                        }
                    }
                });
                const avgFlawlessPrice = validGems > 0 ? sumGemPrice / validGems : 0;
                const avgRoughPrice = avgFlawlessPrice / 512000;

                // Calculate blocks per hour first (needed for gem calculation)
                const blocksPerHour = shaftsPerHour * avgBlocksMined;

                // Gem Formula: roughPerBlock = 4 * (1 + M/100) * (1 + P*0.79)
                // Then multiply by blocks broken per hour
                // B = Base drop (4 for all gems)
                // M = Mining Fortune
                // P = Pristine
                const B = 4; // Base drop
                const M = fortune; // Mining Fortune
                const P = pristine; // Pristine level

                const roughPerBlock = B * (1 + M / 100) * (1 + P * 0.79);
                const totalRoughGemsHr = roughPerBlock * blocksPerHour;
                const gemProfitHr = totalRoughGemsHr * avgRoughPrice;

                // 3. Glacite (Pickobulus) Profit (Weighted) - Uses Dwarven Metal Fortune
                const glaciteMult = ((dwarvenMetalFortune - 165) / 100) + 1;
                const totalRuns = pickobulusCounts.total;

                // Calculate Average Glacite Yield per Run based on Pickobulus Phases Reached
                // Phase 1 (0s): 178 base
                // Phase 2 (30s): +180 base
                // Phase 3 (60s): +186 base

                const pct1 = pickobulusCounts.p1_only / totalRuns;
                const pct2 = pickobulusCounts.p2_only / totalRuns;
                const pct3 = pickobulusCounts.p3_all / totalRuns;

                // Weighted Average Base Glacite
                const weightedBase = (pct1 * 178) + (pct2 * (178 + 180)) + (pct3 * (178 + 180 + 186));

                const avgGlacitePerRun = weightedBase * glaciteMult;
                const glaciteProfitHr = (avgGlacitePerRun * 12) * shaftsPerHour;

                // 4. PET XP CALCULATION
                // Get Pet XP Settings
                const miningWisdom = parseFloat(document.getElementById('miningWisdom').value) || 0;
                const tamingLevel = parseFloat(document.getElementById('tamingLevel').value) || 0;
                const beastmasterCrest = parseFloat(document.getElementById('beastmasterCrest').value) || 0;
                const expBoostItem = parseFloat(document.getElementById('expBoostItem').value) || 0;
                const miscXpBuff = parseFloat(document.getElementById('miscXpBuff').value) || 0;
                const isMiningPet = document.getElementById('miningPet').checked;
                const expSharePercent = parseFloat(document.getElementById('expSharePercent').value) || 0;
                const isExpShareMiningPet = document.getElementById('expShareMiningPet').checked;
                const isSharingIsCaring = document.getElementById('sharingIsCaring').checked;

                // Base Pet XP per Pickobulus phase
                const basePetXP_P1 = 8945.25;
                const basePetXP_P2 = 8589.7;
                const basePetXP_P3 = 9456.38;

                // Weighted average base pet XP based on pickobulus distribution
                const weightedBasePetXP = (pct1 * basePetXP_P1) + (pct2 * basePetXP_P2) + (pct3 * basePetXP_P3);

                // Calculate A = sum of bonuses (converted from % to decimal)
                const A = (tamingLevel / 100) + (beastmasterCrest / 100) + (expBoostItem / 100) + (miscXpBuff / 100);

                // Mining Pet multiplier: 3 if checked, 1 if not
                const miningPetMult = isMiningPet ? 3 : 1;

                // Main Pet XP Formula: XP = BasePetXP * (1 + MiningWisdom/100) * (1 + A) * MiningPetMult
                const mainPetXPPerRun = weightedBasePetXP * (1 + miningWisdom / 100) * (1 + A) * miningPetMult;
                const mainPetXPPerHour = mainPetXPPerRun * shaftsPerHour;

                // Exp Share XP Calculation
                // ExpShareXP = MainPetXP * (ExpShare% / 100) * ExpShareMiningPetMult * SharingIsCaringMult
                const expShareMiningPetMult = isExpShareMiningPet ? 1.5 : 0.5;
                const sharingIsCaringMult = isSharingIsCaring ? 3 : 1;
                const expShareXPPerHour = mainPetXPPerHour * (expSharePercent / 100) * expShareMiningPetMult * sharingIsCaringMult;

                // Coins per XP conversion
                const coinsPerXpNonMining = parseFloat(document.getElementById('coinsPerXpNonMining').value) || 1;
                const coinsPerXpMining = parseFloat(document.getElementById('coinsPerXpMining').value) || 0.35;

                // Main pet uses mining rate if mining pet is checked, non-mining otherwise
                const mainPetCoinsPerXP = isMiningPet ? coinsPerXpMining : coinsPerXpNonMining;
                const mainPetProfitHr = mainPetXPPerHour * mainPetCoinsPerXP;

                // Exp share pets use mining rate if exp share mining pet is checked
                const expShareCoinsPerXP = isExpShareMiningPet ? coinsPerXpMining : coinsPerXpNonMining;
                const expShareProfitHr = expShareXPPerHour * expShareCoinsPerXP;

                // GRAND TOTAL (now includes pet XP profit)
                const totalProfitHr = lapisProfitHr + gemProfitHr + glaciteProfitHr + mainPetProfitHr + expShareProfitHr;

                // Update UI
                document.getElementById('totalProfit').innerText = formatNumber(totalProfitHr);

                // Breakdown Table
                document.getElementById('bdLapisCount').innerText = lapisPerHour.toFixed(1) + " corpses/hr";
                document.getElementById('bdLapisVal').innerText = formatNumber(lapisProfitHr);

                document.getElementById('bdGemCount').innerText = formatNumber(blocksPerHour);
                document.getElementById('bdRoughGemsHr').innerText = formatNumber(totalRoughGemsHr);
                document.getElementById('bdGemVal').innerText = formatNumber(gemProfitHr);

                // Glacite Breakdown Text
                const pct3Str = (pct3 * 100).toFixed(0);
                document.getElementById('bdGlaciteSplit').innerText = `${pct3Str}% Full Clear (${glaciteMult.toFixed(1)}x)`;
                document.getElementById('bdGlaciteVal').innerText = formatNumber(glaciteProfitHr);

                // Pet XP Breakdown - now showing coin value
                document.getElementById('bdMainPetXP').innerText = formatNumber(mainPetXPPerHour);
                document.getElementById('bdMainPetVal').innerText = formatNumber(mainPetProfitHr);
                document.getElementById('bdExpShareXP').innerText = formatNumber(expShareXPPerHour);
                document.getElementById('bdExpShareVal').innerText = formatNumber(expShareProfitHr);

                document.getElementById('bdTotalVal').innerText = formatNumber(totalProfitHr);

                // Update Main Total Profit Tile if Normal tab is active
                if (currentBreakdownTab === 'normal') {
                    const totalProfitEl = document.getElementById('totalProfit');
                    totalProfitEl.innerText = formatNumber(totalProfitHr);
                    totalProfitEl.classList.remove('text-amber-300');
                    totalProfitEl.classList.add('text-cyan-300');
                }

                // Store values for Jasper Economy calculations
                const dmcLevel = parseInt(document.getElementById('dmcLevel').value) || 0;
                jasperEconomyData.lapisProfitHr = lapisProfitHr;
                jasperEconomyData.lapisPerHour = lapisPerHour;
                jasperEconomyData.lapisValuePerCorpse = lapisPerHour > 0 ? lapisProfitHr / lapisPerHour : 0;
                jasperEconomyData.gemProfitHr = gemProfitHr;
                jasperEconomyData.blocksPerHour = blocksPerHour;
                jasperEconomyData.glaciteProfitHr = glaciteProfitHr;
                jasperEconomyData.pct3 = pct3;
                jasperEconomyData.mainPetProfitHr = mainPetProfitHr;
                jasperEconomyData.mainPetXPPerHour = mainPetXPPerHour;
                jasperEconomyData.expShareProfitHr = expShareProfitHr;
                jasperEconomyData.expShareXPPerHour = expShareXPPerHour;
                jasperEconomyData.dmcLevel = dmcLevel;
                // Additional data for crystals and pristine bonus
                jasperEconomyData.shaftsPerHour = shaftsPerHour;
                jasperEconomyData.gemChanceDecimal = gemChanceDecimal;
                jasperEconomyData.pristine = pristine;
                jasperEconomyData.includeCrystals = includeCrystals;
                jasperEconomyData.crystalClaimTime = crystalClaimTime;

                // Crystal Profit for Normal View
                let crystalProfitHr = 0;
                let crystalsPerHour = shaftsPerHour * crystalChance;

                if (includeCrystals && bazaarData) {
                    const priceKey = useGemSellOrder ? 'buyPrice' : 'sellPrice';
                    // Prices
                    const pOnyx = bazaarData['PERFECT_ONYX_GEM']?.quick_status[priceKey] || 0;
                    const fOnyx = bazaarData['FLAWLESS_ONYX_GEM']?.quick_status.buyPrice || 0; // Cost to make
                    const pPeridot = bazaarData['PERFECT_PERIDOT_GEM']?.quick_status[priceKey] || 0;
                    const fPeridot = bazaarData['FLAWLESS_PERIDOT_GEM']?.quick_status.buyPrice || 0;

                    console.log("--- CRYSTAL PROFIT LOGIC ---");
                    console.log("Onyx P/F:", pOnyx, fOnyx);
                    console.log("Peridot P/F:", pPeridot, fPeridot);

                    // Profit = Perfect - (5 * Flawless) - 1.4m
                    const profitOnyx = pOnyx - (5 * fOnyx) - 1400000;
                    const profitPeridot = pPeridot - (5 * fPeridot) - 1400000;

                    // 50/50 split between Onyx and Peridot
                    crystalProfitHr = crystalsPerHour * 0.5 * (profitOnyx + profitPeridot);
                }

                jasperEconomyData.crystalProfitHr = crystalProfitHr;
                totalProfitHr += crystalProfitHr;

                // Update Normal View Crystal Row
                const crystalRow = document.getElementById('bdCrystalRow');
                if (includeCrystals) {
                    crystalRow.classList.remove('hidden');
                    document.getElementById('bdCrystalCount').innerText = crystalsPerHour.toFixed(2);
                    document.getElementById('bdCrystalVal').innerText = formatNumber(crystalProfitHr);
                } else {
                    crystalRow.classList.add('hidden');
                }

                document.getElementById('bdTotalVal').innerText = formatNumber(totalProfitHr);

                // 5. JASPER SHAFT CALCULATIONS
                calculateJasperProfits(shaftsPerHour, totalProfitHr, priceKey, fortune, pristine, gemChanceDecimal);
            }
        }

        // --- JASPER SHAFT CALCULATIONS ---
        function calculateTimeToMaxCold(coldRes, targetCold = 100, startingCold = 0, startingTime = 0) {
            // Calculate time to reach targetCold from startingCold, starting at startingTime
            // Phase boundaries are at 150s intervals
            // Phase 0 (0-150s): 5 * (1 + coldRes/100) seconds per cold
            // Phase 1 (150-300s): 5/1.25 * (1 + coldRes/100)
            // Phase 2 (300-450s): 5/1.25/1.20 * (1 + coldRes/100)
            // Phase 3 (450-600s): 5/1.25/1.20/1.15 * (1 + coldRes/100)
            // Phase 4+ (600s+): additional /1.15 each 150s

            const coldMultiplier = 1 + coldRes / 100;
            let cold = startingCold;
            let time = startingTime;

            let iterations = 0;
            const maxIterations = 10000; // Safety limit
            while (cold < targetCold && iterations < maxIterations) {
                iterations++;
                // Determine which phase we're in based on current time
                const phase = Math.floor(time / 150);
                const phaseEndTime = (phase + 1) * 150;

                // Calculate divisor for current phase
                let divisor = 1;
                if (phase >= 1) divisor *= 1.25;
                if (phase >= 2) divisor *= 1.20;
                for (let i = 3; i <= phase; i++) divisor *= 1.15;

                const secPerCold = (5 / divisor) * coldMultiplier;

                // How much cold do we still need?
                const coldNeeded = targetCold - cold;

                // How much time until this phase ends?
                const timeLeftInPhase = phaseEndTime - time;

                // How much cold would we gain if we stay in this phase until it ends?
                const coldGainIfStay = timeLeftInPhase / secPerCold;

                if (coldGainIfStay >= coldNeeded) {
                    // We reach target cold in this phase
                    time += coldNeeded * secPerCold;
                    cold = targetCold;
                } else {
                    // We don't reach target cold, move to next phase
                    cold += coldGainIfStay;
                    time = phaseEndTime;
                }

                // Safety break to prevent infinite loop
                if (time > 7200) break;
            }

            return time;
        }

        function calculateJasperProfits(shaftsPerHour, baseProfitRate, priceKey, fortune, pristine, gemChanceDecimal) {
            // Calculate jasper shafts using spawn probabilities
            // - Pickobulus/glacite spawns: 0.0625 × 4/5 chance to be jasper (4/5 accounts for 1/5 crystal shafts)
            // - Gem spawns: 0.04444 × 4/5 chance to be jasper
            const nonGemRate = 1 - (gemChanceDecimal || 0);
            const gemRate = gemChanceDecimal || 0;

            const jasperRateNonGem = 0.0625 * (4 / 5);  // 0.05
            const jasperRateGem = 0.04444 * (4 / 5);    // 0.03555

            // Expected jasper shafts per hour
            const jasperShafts = shaftsPerHour * ((nonGemRate * jasperRateNonGem) + (gemRate * jasperRateGem));
            const crystalShaftsPerHour = shaftsPerHour * 0.2;  // 1/5 of all shafts are crystal

            // Update UI for Jasper/Crystal display
            document.getElementById('jasperShafts').innerText = jasperShafts.toFixed(2);
            document.getElementById('crystalShafts').innerText = crystalShaftsPerHour.toFixed(2);

            const coldRes = parseFloat(document.getElementById('coldResistance').value) || 0;
            let avgFines = parseFloat(document.getElementById('avgFinesJasper').value) || 0;

            // --- APPLY MODIFIERS ---
            // 1. Pristine Modifier: Each corpse above 1 adds +1 Pristine
            const corpsEl = document.getElementById('jasperCorpses');
            const corpsCounts = corpsEl ? parseInt(corpsEl.value) : 1;
            const bonusPristine = (corpsCounts || 1) - 1; // Default to 1 if parseInt fails

            // Formula: Reverse engineer drops based on pristine increase
            // Multiplier = (1 + (P + Bonus) * 0.79) / (1 + P * 0.79)
            // Ensure P > 0 to avoid division by zero issues (though 1+0 is fine)
            // If pristine is 0, logic still holds: multiplier acts as if we went from 0 to bonusP
            const pMult = (1 + (pristine + bonusPristine) * 0.79) / (1 + pristine * 0.79);

            // 2. Fortune Modifier: HOTM perks (+50, +100) + Front Loaded (+150)
            const f50El = document.getElementById('jasperFortune50');
            const f100El = document.getElementById('jasperFortune100');
            const fFrontLoadedEl = document.getElementById('jasperFrontLoaded');
            const f50 = (f50El && f50El.checked) ? 50 : 0;
            const f100 = (f100El && f100El.checked) ? 100 : 0;
            const fFrontLoaded = (fFrontLoadedEl && fFrontLoadedEl.checked) ? 150 : 0;
            const bonusFortune = f50 + f100 + fFrontLoaded;

            // Formula: Scale based on fortune increase
            // Multiplier = (1 + (M + Bonus)/100) / (1 + M/100)
            const fMult = (1 + (fortune + bonusFortune) / 100) / (1 + fortune / 100);

            // Apply multipliers to average fines
            avgFines = avgFines * pMult * fMult;

            // If no fines entered, show defaults
            if (avgFines <= 0 || !bazaarData) {
                document.getElementById('jasper0CampProfit').innerText = '--';
                document.getElementById('jasper0CampTime').innerText = '--';
                document.getElementById('jasper1CampProfit').innerText = '--';
                document.getElementById('jasper1CampTime').innerText = '--';
                document.getElementById('jasper2CampProfit').innerText = '--';
                document.getElementById('jasper2CampTime').innerText = '--';
                return;
            }

            // Get jasper price override settings
            const jasperPriceOverride = parseFloat(document.getElementById('jasperPriceOverride').value) || 0;
            const useFineJasper = document.getElementById('useFineJasper').checked;

            // Determine jasper price: manual override > FINE_JASPER_GEM (×80) > FLAWLESS_JASPER_GEM
            let jasperPrice;
            if (jasperPriceOverride > 0) {
                jasperPrice = jasperPriceOverride;
            } else if (useFineJasper) {
                const finePrice = bazaarData['FINE_JASPER_GEM']?.quick_status.buyPrice || 0;
                jasperPrice = finePrice * 80; // Convert fine to flawless equivalent
            } else {
                jasperPrice = bazaarData[JASPER_ID]?.quick_status.buyPrice || 0;
            }

            const umberPrice = bazaarData['REFINED_UMBER']?.quick_status.buyPrice || 0; // Always insta-buy for campfires
            const campfireCost = umberPrice + 75000;

            // Base time: 0 to 100 cold (starting at time 0)
            // calculateTimeToMaxCold(coldRes, targetCold, startingCold, startingTime)
            const time0 = calculateTimeToMaxCold(coldRes, 100, 0, 0);

            // === 0 CAMPFIRE SCENARIO ===
            // Formula: (jasperPrice/80) * fines * (3600/seconds)
            const coinsHr0 = (jasperPrice / 80) * avgFines * (3600 / time0);

            // Debug output
            console.log('Jasper Debug:', { jasperPrice, jasperPriceOverride, useFineJasper, avgFines, time0, coinsHr0, coldRes });

            // === 1 CAMPFIRE SCENARIO ===
            // At time0, use campfire (cold drops from 100 to 50), continue from time0
            // Calculate time to go from 50 cold back to 100 cold, starting at time0
            const time1End = calculateTimeToMaxCold(coldRes, 100, 50, time0);
            const time1Window = time1End - time0; // Only the window duration
            const fines1Window = avgFines * (time1Window / time0); // Fines gained in this window
            const revenue1Window = (fines1Window / 80) * jasperPrice;
            const coinsHr1 = (revenue1Window - campfireCost) * (3600 / time1Window);

            // === 2 CAMPFIRE SCENARIO ===
            // At time1End, use second campfire (cold drops from 100 to 50), continue from time1End
            const time2End = calculateTimeToMaxCold(coldRes, 100, 50, time1End);
            const time2Window = time2End - time1End; // Only the window duration
            const fines2Window = avgFines * (time2Window / time0); // Fines gained in this window
            const revenue2Window = (fines2Window / 80) * jasperPrice;
            const coinsHr2 = (revenue2Window - campfireCost) * (3600 / time2Window);

            // Store jasper data for economy calculations
            jasperEconomyData.jasperShaftsPerHour = jasperShafts;
            jasperEconomyData.time0 = time0;
            jasperEconomyData.time1Total = time1End; // Total time for 1 campfire run
            jasperEconomyData.time2Total = time2End; // Total time for 2 campfire run
            jasperEconomyData.campfireCost = campfireCost;
            jasperEconomyData.jasperPrice = jasperPrice;
            jasperEconomyData.avgFines = avgFines;
            jasperEconomyData.coinsHr0 = coinsHr0;
            jasperEconomyData.coinsHr1 = coinsHr1;
            jasperEconomyData.coinsHr2 = coinsHr2;

            // Update Jasper Economy view if it's visible
            if (!document.getElementById('breakdownJasper').classList.contains('hidden')) {
                updateJasperEconomyBreakdown();
            }

            // Update UI with /hr labels - show window duration for campfire scenarios
            document.getElementById('jasper0CampTime').innerText = time0.toFixed(0);
            document.getElementById('jasper0CampProfit').innerText = formatNumber(coinsHr0) + '/hr';

            document.getElementById('jasper1CampTime').innerText = time1Window.toFixed(0);
            document.getElementById('jasper1CampProfit').innerText = formatNumber(coinsHr1) + '/hr';

            document.getElementById('jasper2CampTime').innerText = time2Window.toFixed(0);
            document.getElementById('jasper2CampProfit').innerText = formatNumber(coinsHr2) + '/hr';
        }

        // --- SIMULATION ---
        function calculateTheory(bonus, targetTime) {
            let counter = 2000;
            let survival = 1.0;
            let expectedTime = 0;
            let gemProb = 0;

            let p1Chance = (350 / 2) * ((100 + bonus) / (counter - 2)) / 100;
            let p1Prob = survival * p1Chance;
            expectedTime += 0 * p1Prob;
            survival -= p1Prob;
            counter -= 350;

            const totalBlocks = 118;
            const blockT = targetTime / totalBlocks;

            for (let b = 1; b <= totalBlocks; b++) {
                let currentTime = b * blockT;
                if ((b - 1) * blockT < 30 && currentTime >= 30) {
                    let p2C = (336 / 2) * ((100 + bonus) / (counter - 2)) / 100;
                    let p2Prob = survival * p2C;
                    expectedTime += 30 * p2Prob;
                    survival -= p2Prob;
                    counter -= 336;
                }
                if ((b - 1) * blockT < 60 && currentTime >= 60) {
                    let p3C = (370 / 2) * ((100 + bonus) / (counter - 2)) / 100;
                    let p3Prob = survival * p3C;
                    expectedTime += 60 * p3Prob;
                    survival -= p3Prob;
                    counter -= 370;
                }

                if (counter > 8) {
                    let bc = (100 + bonus) / (counter - 8) / 100;
                    let blockProb = survival * bc;
                    gemProb += blockProb;
                    expectedTime += currentTime * blockProb;
                    survival -= blockProb;
                    counter -= 8;
                } else {
                    expectedTime += currentTime * survival;
                    survival = 0;
                    break;
                }
            }
            if (survival > 0) expectedTime += targetTime * survival;
            return { time: expectedTime, gemPercent: gemProb * 100 };
        }

        function runSimulation() {
            const bonus = parseFloat(document.getElementById('pctInput').value) || 0;
            const targetTime = parseFloat(document.getElementById('timeInput').value) || 60;
            const iterations = parseInt(document.getElementById('simCount').value);

            const blockT = targetTime / 118;
            let batchSum = 0;
            let bins = new Array(60).fill(0);
            const binStep = targetTime / 60;

            let totalBlocksMined = 0;

            // Pickobulus Counters
            let pickCounts = {
                p1_only: 0, // < 30s
                p2_only: 0, // >= 30s but < 60s
                p3_all: 0,  // >= 60s
                total: iterations
            };

            for (let i = 0; i < iterations; i++) {
                let sCounter = 2000;
                let sTime = 0;
                let spawned = false;
                let blocksInRun = 0;

                // P1 Check (0s)
                if (Math.random() < (175 * ((100 + bonus) / (sCounter - 2)) / 100)) {
                    spawned = true;
                    sTime = 0;
                    // Spawned instantly at 0s (very rare in theory logic, but possible here)
                    // If spawned at 0, you get Phase 1 pickobulus? 
                    // Logic: You enter, pick, it spawns. 
                    // If sTime < 30, it's P1 only.
                } else {
                    sCounter -= 350;
                    for (let b = 1; b <= 118; b++) {
                        blocksInRun = b;
                        let prev = sTime;
                        sTime = b * blockT;

                        if (prev < 30 && sTime >= 30) {
                            if (Math.random() < (168 * ((100 + bonus) / (sCounter - 2)) / 100)) {
                                spawned = true; sTime = 30; break;
                            }
                            sCounter -= 336;
                        }
                        if (prev < 60 && sTime >= 60) {
                            if (Math.random() < (185 * ((100 + bonus) / (sCounter - 2)) / 100)) {
                                spawned = true; sTime = 60; break;
                            }
                            sCounter -= 370;
                        }

                        if (sCounter > 8) {
                            if (Math.random() < ((100 + bonus) / (sCounter - 8) / 100)) { spawned = true; break; }
                        } else {
                            spawned = true; break; // Hit 0 blocks remaining logic
                        }
                        sCounter -= 8;
                    }
                }

                // Final time calculation for this run
                const finalTime = spawned ? sTime : targetTime;

                // Categorize for Pickobulus
                // Logic: 
                // < 30s: Only reached 1st checkpoint
                // 30 <= t < 60: Reached 2nd checkpoint
                // >= 60: Reached 3rd checkpoint
                if (finalTime < 30) {
                    pickCounts.p1_only++;
                } else if (finalTime < 60) {
                    pickCounts.p2_only++;
                } else {
                    pickCounts.p3_all++;
                }

                batchSum += finalTime;
                bins[Math.min(Math.floor(finalTime / binStep), 59)]++;
                totalBlocksMined += blocksInRun;
            }

            lifetimeSum += batchSum;
            lifetimeCount += iterations;
            const currentAvg = batchSum / iterations;
            const avgBlocks = totalBlocksMined / iterations;
            const theory = calculateTheory(bonus, targetTime);

            updateUI(currentAvg, targetTime, theory.gemPercent, bins, theory.time);

            // Pass pickCounts to econ calc
            calculateEconomics(currentAvg, avgBlocks, theory.gemPercent / 100, pickCounts);

            document.getElementById('statusTag').classList.add('hidden');
            document.getElementById('controlPanel').classList.remove('processing');
        }

        function updateUI(currentAvg, targetTime, gemPercent, bins, theoryTime) {
            const globalAvg = lifetimeSum / lifetimeCount;
            document.getElementById('avgStat').innerText = currentAvg.toFixed(2) + 's';
            document.getElementById('globalAvgStat').innerText = globalAvg.toFixed(2) + 's';

            document.getElementById('gemStat').innerText = gemPercent.toFixed(2) + '%';
            document.getElementById('theoryStat').innerText = theoryTime.toFixed(2) + 's';
            const varVal = ((currentAvg - theoryTime) / theoryTime) * 100;
            document.getElementById('varianceStat').innerText = (varVal > 0 ? "+" : "") + varVal.toFixed(3) + "% VAR";

            // 10 bins for better data visibility
            const numBins = 10;
            const binWidth = targetTime / numBins;
            const histogramBins = new Array(numBins).fill(0);
            const binStep = targetTime / 60;

            // Map original 60 bins into 10 bins
            for (let i = 0; i < 60; i++) {
                const t = i * binStep;
                const targetBin = Math.min(Math.floor(t / binWidth), numBins - 1);
                histogramBins[targetBin] += bins[i] || 0;
            }

            // Generate labels
            const binLabels = [];
            for (let i = 0; i < numBins; i++) {
                const start = (i * binWidth).toFixed(0);
                const end = ((i + 1) * binWidth).toFixed(0);
                binLabels.push(i === numBins - 1 ? start + 's+' : start + '-' + end + 's');
            }

            // Calculate average position for vertical line (scale to 10 bins)
            const avgBinPosition = (currentAvg / targetTime) * numBins;

            if (myChart) myChart.destroy();
            myChart = new Chart(document.getElementById('spawnChart'), {
                type: 'bar',
                data: {
                    labels: binLabels,
                    datasets: [{
                        data: histogramBins,
                        backgroundColor: 'rgba(34, 211, 238, 0.5)',
                        borderColor: '#22d3ee',
                        borderWidth: 1,
                        barPercentage: 0.95,
                        categoryPercentage: 0.95
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { display: false },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#64748b', font: { size: 8 } }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        annotation: {
                            annotations: {
                                avgLine: {
                                    type: 'line',
                                    xMin: avgBinPosition,
                                    xMax: avgBinPosition,
                                    borderColor: '#facc15',
                                    borderWidth: 2,
                                    borderDash: [5, 5],
                                    label: {
                                        display: true,
                                        content: 'Avg: ' + currentAvg.toFixed(1) + 's',
                                        position: 'start',
                                        backgroundColor: 'rgba(250, 204, 21, 0.9)',
                                        color: '#000',
                                        font: { size: 8, weight: 'bold' }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }

        // --- EVENT LISTENERS FOR NEW INPUTS ---
        ['jasperCorpses', 'jasperFortune50', 'jasperFortune100', 'jasperFrontLoaded'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', startCompute);
        });
