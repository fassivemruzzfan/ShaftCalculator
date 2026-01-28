# Shafting Calculator

A precision economy calculator for Hypixel Skyblock's Glacite Tunnels mineshafts. Calculates spawn rates, loot values, and profit per hour based on your stats.

## Quick Start

1. Open `lfgemsapiref.html` in your browser
2. Enter your **Spawn Bonus %** and **Time to Pity**
3. Fill in your **Mineshaft Stats** (Fortune, Pristine, Cold Resistance, Fines/1L)
4. Click **Run Engine**

## Input Sections

### Basic Inputs (Always Visible)
| Field | Description |
|-------|-------------|
| **Spawn Bonus %** | Your base spawn chance modifier |
| **Time to Pity** | Seconds until guaranteed spawn  |
| **Mineshaft Stats** | Fortune, Pristine, Cold Resistance, Fines per 1L Jasper |

### Advanced Settings (Click to Expand)

#### Player Stats (Glacite Tunnels)
- **Mining Fortune** / **Pristine** / **DM Fortune**: Your stats in the dwarven mines
- **Sell Offer Spawning Gems**: Toggle for using sell offers vs instant sell

#### Jasper Price Override
- Override API price with manual value - api can be goofy (0 = use live API)
- Toggle for Fine Jasper pricing

#### Jasper Modifiers
- **Corpses Looted**: 1-4 corpses per shaft
- **Fortune Bonuses**: +50/+100 HOTM, +150 Front Loaded
- **Calc. Corpses**: Use calculated corpse rate (1.25L + DMC bonus) (Average corpses is 1.25l, 1.505 max dmc. it does math to increase your average 1l to this value)
- **Mine Jasper Crystal Shafts**: Enable 80/20 Normal/Crystal split calculation

#### Crystal Config
- **Calc. Onyx & Peridot**: Include crystal gems in profit
- **Claim/Forge Time**: Time penalty for crystal collection - how long it takes to collect + forge (seconds)

#### Lapis + Shaft Config
- **Gifts from Departed**: Level 0-101
- **Sell Offer Corpse Loot**: Toggle sell order pricing
- **Dead Man's Chest**: Level 0-51
- **Timing Fields**: Pickob #1, Enter (time it takes to click on mineshaft particles, click pickaxe, and load in), Time To Ground (from top of shaft), Exit (loading time back to glacite tunnels)
- **Loot Times**: Time to loot each lapis count - use your averages, I dont have alot of data (0L-4L)
- **Bad Spawn Rates**: Percentage of corpses not worth collecting (too far)

#### Pet XP Settings
Configure mining wisdom, taming level, beastmaster, exp boost items, and exp share settings for XP valuation.

## Dashboard Tiles

| Tile | Description |
|------|-------------|
| **Spawn Avg** | Average spawns per session |
| **Jasper Profit / Hour** | Hourly profit from Spawning + Jasper |
| **Spawning Profit / Hour** | Hourly profit from Everything except mining shafts out |
| **Pet XP / Hour** | Hourly pet experience earned |

## Tabs

- **Normal**: Standard Profit If You only Spawned Shafts, Looted Corpses, Gained Pet XP, and collected crystals (if toggled)
- **Jasper Shafts**: Combines your normal hourly rate with hour much you will make while in jasper shafts

## Tips

- The calculator auto-switches to Jasper tab when you input Cold Resistance or Fines/1L
- Use **Reset Defaults** to clear all settings
- **Undo Reset** appears after resetting if you need to restore

---
*"Not_VIBE_CODED" // @thunderrbird*
