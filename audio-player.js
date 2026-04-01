/**
 * audio-player.js
 * Freeze Thrust Fault — Full Site Audio Player
 * Drop-in floating player bar for index.html
 * Matches site palette: dark backgrounds, earth-tone accents, Playfair Display / Source Serif 4
 */

(function () {
  'use strict';

  // ─── CONTENT ────────────────────────────────────────────────────────────────
  // Each segment maps to a section anchor so the page scrolls as narration advances.

  const SECTIONS = [
    {
      id: 'intro',
      label: 'Introduction',
      anchor: '#intro',
      segs: [
        {
          title: 'The Freeze Thrust Fault',
          text: 'There is a scar running through Virginia. It is the structural spine of the entire Blue Ridge — 300 miles long, older than the Appalachians, older than fish, older than anything that has ever left a footprint on this earth. It runs from central Virginia south into North Carolina. It runs through Shenandoah. It runs through the Great Smoky Mountains corridor. And it runs through land along Laurel Ridge Mill Road in Riner, Virginia. The rock it exposes is between 1.1 and 1.3 billion years old.'
        }
      ]
    },
    {
      id: 'movement1',
      label: 'I — The Rock',
      anchor: '#movement1',
      segs: [
        {
          title: 'This rock is not what the Appalachians are made of',
          text: 'The road comes off Route 8 and drops south. Laurel Ridge Mill Road follows the land the way old roads do — not cutting through terrain but tracing the path of least resistance, following the creek, bending with the ridge. When you walk the property here, in the floodplain where the Little River curves through, you are crossing the Fries Thrust Fault. You just need to know to look for it. At the water\'s edge and along the exposed banks, the rock is dark blue-gray, banded, heavy. It does not look like the sandstone or limestone most people associate with Virginia. It looks older. It is older. By a factor of nearly four, it is older than anything the word Appalachian implies. This is the basement — the ancient foundation on which the entire mountain range was later built — exposed at the surface by a fault that pushed it upward and a river that stripped the overburden away.'
        },
        {
          title: 'The land itself records it',
          text: 'The Little River, running through these meander loops, crosses the fault trace twice — once through each bend between the Route 8 and Brush Creek bridges. The fault runs through the fields and the floodplain. It is not an abstraction. It is a structural boundary underfoot.'
        },
        {
          title: 'What the Rock Looks Like',
          text: 'This is what 1.1 billion years looks like in your hand. The rock is gneiss — dark blue-gray at its base, banded through with pale cream and pink where feldspar crystals have grown and fractured. The banding is not sedimentary layering. It is foliation — the physical record of compression so extreme, sustained over so long, that the minerals within the rock reorganized themselves into parallel bands. You are looking at the texture of a mountain range that no longer exists. The gray matrix is dense with biotite — a dark mica mineral — giving the rock its characteristic blue-gray cast in shadow and a faint metallic shimmer in direct light. This specimen came from along the Little River on Laurel Ridge Mill Road. It is the deeply eroded root of a Himalayan-scale mountain range, held in one hand.'
        },
        {
          title: 'Two Gneisses, One Fault',
          text: 'Not all the rock along the Little River is the same. Whitmarsh, in the defining 1994 structural study of this fault zone, identified two distinct gneiss units on either side of the fault trace. To the south of the fault trace is the Little River Gneiss: the rock caught directly in the fault\'s shear zone as the Blue Ridge was thrust westward. To the north is the Pilot Gneiss: the same Grenville-age basement rock, the same billion-year age, but outside the fault\'s teeth — coarser, blockier, less deformed. Where the Little River crosses the fault trace through both meander loops, you are crossing the boundary between these two units. The river did not create that boundary. The fault did, roughly 480 million years ago.'
        },
        {
          title: 'What the Fault Did to the Rock: Mylonite',
          text: 'The Little River Gneiss was not simply cooked — it was also caught in the moving fault zone, and Whitmarsh formally described it as a mylonitic gneiss. Mylonite — from the Greek for mill — is rock that has been ground and sheared while still hot and deep in the crust. Rather than fracturing, the minerals flowed under the sustained stress of fault movement, stretching into thin ribbons and fine-grained sheets. The result is a rock with banding that is finer, more continuous, almost streaky — sometimes described as having a wood-grain or pulled-taffy appearance. This is the physical signature of fault motion preserved in stone. When you see the streaky, platy rock at the river bank, you are looking at the record of the fault itself, written into the mineral structure of the rock at the moment the Blue Ridge was moving.'
        },
        {
          title: 'The Crumbly Material: Saprolite',
          text: 'Along the banks and in the exposed cuts near the river, much of what you see is not solid rock at all — it is a material that looks like compacted dirt, crumbles in your hands, yet still shows the layering and banding of the gneiss it came from. This is saprolite, from the Greek for rotten rock. The atoms in it are still 1.1 to 1.3 billion years old. The foliation — the parallel banding from the ancient compression — is still visible in it if you look carefully. Quartz veins still run through it as hard white ribs. But the feldspar and biotite that gave the gneiss its strength have been chemically transformed by millennia of slightly acidic groundwater, converting those minerals into clay. The fault accelerated this process. The micro-fractures created by fault movement gave groundwater pathways deep into the rock. What looks like soil at the base of the bank is billion-year-old tectonic material in its final stage.'
        }
      ]
    },
    {
      id: 'movement2',
      label: 'II — Deep Time',
      anchor: '#movement2',
      segs: [
        {
          title: 'That number is difficult to perceive',
          text: 'Start with what did not yet exist when this rock formed. The Atlantic Ocean did not exist — it opened roughly 180 million years ago when Pangaea broke apart. The Appalachian Mountains did not exist — they began forming around 480 million years ago, built on this very Grenville-age basement rock. North America as a continent did not exist — it took shape during the assembly of Pangaea around 335 million years ago. Fish had not evolved — the first vertebrates appeared in Cambrian seas around 530 million years ago. Insects had not evolved — the first arthropods colonized land around 400 million years ago. There were no plants anywhere on Earth — not until roughly 470 million years ago. Multicellular life had barely begun. Nothing moved of its own will.'
        },
        {
          title: 'The Boring Billion: What the World Looked Like',
          text: 'The sky was not blue. The atmosphere had oxygen, but only a fraction of today\'s levels — too thin to support an ozone layer thick enough to block ultraviolet radiation, too thin to breathe. The oceans were mostly anoxic below the surface, rich in dissolved iron and hydrogen sulfide. The land was bare rock and sediment. There were no soils — soil requires roots and organisms to form it, and there were none. Wind moved sediment freely across an entirely bare surface. No footprint was ever made on this land. No sound was made by anything that moved of its own will. The dominant life form was stromatolites — layered mounds built by microbial mats, mostly cyanobacteria, growing in shallow water. Geologists named this interval the Boring Billion — roughly 1.8 to 0.8 billion years ago, a stretch of time in which oxygen levels barely changed, evolution seemingly stalled, and the planet sat in a long, quiet equilibrium. The sun was about 85 percent as bright as it is today. The day was shorter. The moon was closer and the tides were higher. This is when the rock along Laurel Ridge Mill Road formed.'
        },
        {
          title: 'What came after — and how much later',
          text: 'Consider the sequence of what followed. Around 750 million years ago, Rodinia broke apart. The rock was already 400 to 500 million years old. Around 480 million years ago, the Taconic Ore-ig-any began building the first Appalachian Mountains — the rock was already 700 million years old. Around 300 million years ago, Africa collided with North America and the modern Appalachian landform took shape — the rock was already 800 to 900 million years old. Around 180 million years ago, the Atlantic Ocean opened and dinosaurs walked the Earth — the rock was already 1 billion years old. Sixty-six million years ago, the dinosaurs died. The rock has now been in the ground for over a billion years. Today, the rock is at the surface. You can touch it. It is in Riner, Virginia.'
        }
      ]
    },
    {
      id: 'movement3',
      label: 'III — The Mechanism',
      anchor: '#movement3',
      segs: [
        {
          title: 'You know Pan-gee-ah. This rock is older than that.',
          text: 'Anyone with a passing interest in science has heard of Pan-gee-ah — the supercontinent where all the landmasses were joined together. It existed from roughly 335 to 175 million years ago, and its breakup opened the Atlantic Ocean. It feels ancient. It is not nearly old enough. The rock along Laurel Ridge Mill Road formed during the assembly of a different supercontinent entirely: Rodinia. It existed from roughly 1.2 billion to 750 million years ago — assembled by the same kind of continent-to-continent collision that built Pan-gee-ah, but 900 million years earlier. The collision that produced it — the Grenville Ore-ig-any — built a mountain range comparable in scale to the modern Himalayas along what is now the eastern margin of North America. The rock exposed at the Freeze Fault is the deeply eroded root of those mountains. By the time Pan-gee-ah was forming, Rodinia had already assembled, broken apart, and been gone for hundreds of millions of years.'
        },
        {
          title: 'Laurentia: The Cray-tahn',
          text: 'To understand what follows, one concept is essential: Laurentia. Laurentia is the name geologists give to the ancient stable core of what would eventually become North America. Geologists call it a cray-tahn: the thick, tectonically quiet, ancient foundation around which younger rock accretes over billions of years. Think of it as the original continent, onto which everything else was later added. The rock at the Freeze Fault formed at the eastern margin of Laurentia — the boundary where new material was being added, where ocean was closing, where mountains were being built.'
        },
        {
          title: 'The Eye-ap-it-us Ocean',
          text: 'When Rodinia broke apart, it opened an ocean. Not the Atlantic — that came much later. This was the Eye-ap-it-us Ocean, a vast body of water that separated the fragments of Rodinia and eventually covered what is now the eastern United States. You have never heard of the Eye-ap-it-us Ocean because it no longer exists. It closed. The closing of the Eye-ap-it-us Ocean — as the landmasses converged again toward Pan-gee-ah — drove the Taconic Ore-ig-any, which reactivated the Freeze Fault and pushed this billion-year-old rock upward to where it sits today. The sequence, in full: the rock forms during the Grenville Ore-ig-any and the assembly of Rodinia. Rodinia breaks apart, the Eye-ap-it-us Ocean opens. The Eye-ap-it-us Ocean closes, driving the Taconic Ore-ig-any, which reactivates the Freeze Fault. The fault pushes the rock to the surface. Erosion strips the overburden away. The Little River cuts through. And here we are. The ocean you have never heard of is why the rock is here.'
        },
        {
          title: 'What Is a Thrust Fault?',
          text: 'A fault is any fracture in the Earth\'s crust along which two bodies of rock have moved relative to each other. A thrust fault is formed by compressional forces — when two landmasses are being pushed together, the crust has nowhere to go but up. One slab of rock is driven up and over another at a low angle, typically less than 45 degrees from horizontal. The result is that older, deeper rock ends up sitting on top of younger, shallower rock — a reversal of the normal geological order called an overthrust. Of the six known thrust faults in the Riner Quadrangle geologic map area, only four surface: the Freeze, Poor Mountain, Peak Creek, and Roanoke Valley faults. Two others — the Saltville and Pulaski faults — underlie the surface rocks entirely, invisible except to those who know how to read the rock record.'
        },
        {
          title: 'Why the Freeze Fault Stands Apart',
          text: 'What makes the Freeze Fault remarkable is not that it is a thrust fault but what it exposes, where it runs, and how old it is. The Freeze Thrust Fault is one of three major fault zones that run the full length of the Virginia Blue Ridge, forming the structural backbone of one of the state\'s five distinct physiographic regions. The Blue Ridge Province stretches from Pennsylvania to Georgia in a narrow, ancient corridor that includes Shenandoah National Park, the Blue Ridge Parkway, the Appalachian National Scenic Trail, and the Great Smoky Mountains. The exposed rock at the Freeze Fault is among the oldest material found anywhere in Virginia, and one of only a small number of places in the continental United States where Precambrian rock of this age is visible at the surface. The Grand Canyon\'s inner gorge, the Minnesota River Valley, and the Adirondack Mountains are the most familiar comparisons; the Freeze Fault belongs in that same category.'
        },
        {
          title: 'From Shale to Gneiss: Metamorphic Transformation',
          text: 'The rock exposed at the Freeze Fault is gneiss — a coarse-grained, banded metamorphic rock that forms under conditions of extreme temperature and pressure. When rocks are buried deep in the Earth\'s crust — typically 10 to 30 kilometers down — they do not melt. Instead, they recrystallize in the solid state. This process is called regional metamorphism. Starting from shale, the metamorphic progression runs: shale, then slate, then phyllite, then schist, then gneiss. Each step represents higher temperature and pressure and more complete recrystallization. Gneiss, at the end of the progression, is the highest-grade regional metamorphic rock, characterized by a pronounced banding — called foliation — that reflects billions of years of compression. The gneiss at the Freeze Fault formed this way during the Grenville Ore-ig-any, as the collision drove rocks deep into the crust.'
        }
      ]
    },
    {
      id: 'movement4',
      label: 'IV — The Scale',
      anchor: '#movement4',
      segs: [
        {
          title: 'Where the Fault Meets the Surface',
          text: 'The Freeze Thrust Fault does not announce itself. It runs underground for most of its length — buried beneath younger rock, invisible at the surface. But in the Riner area of Montgomery and Floyd Counties, erosion has stripped enough of the overburden away that the fault boundary reaches the ground. The Little River cuts directly through that exposure zone, crossing the fault trace twice as it bends through two meander loops between the Route 8 and Brush Creek bridges. This is what makes the local geography significant. Not the river itself, but what the river has done: cut down through hundreds of millions of years of accumulated rock until it reached the fault plane, and exposed, at water level and along the banks, gneiss that is 1.1 to 1.3 billion years old. Touchable. Walkable.'
        },
        {
          title: 'Three Windows on the Same Fault',
          text: 'The Little River exposure is one of three places along the 300-mile length of the Hayesville–Freeze–Rockfish Valley fault system where Grenville-age gneiss reaches the surface and can be examined directly. At the northeastern end of the system, in Nelson County, Virginia, the Rockfish River has cut down through the Rockfish Valley fault zone to expose Grenville-age gneiss along its banks — a William and Mary geology field site for over 25 years. Geologists have resorted to power-washing it to keep it legible against Virginia\'s plant succession. No such intervention is needed at the Little River, where the active channel keeps the exposure clean. At the southwestern end, in western North Carolina, the Hayesville fault exposes Grenville basement complex — identical in composition and origin to the rock at Riner. The Riner exposure sits roughly in the center of this corridor. What distinguishes it is access. You are standing at one of three points along a 300-mile structural feature where the deep basement of the continent is within reach.'
        },
        {
          title: 'Reading the Geological Map',
          text: 'The fault\'s path through this area is documented on a state geological map of the Riner Quadrangle compiled by geologist Bill Henika, a Research Professor at Virginia Tech. An annotated version of this map shows the fault trace labeled clearly as the Freeze Thrust Fault, running directly through the meander loops of the Little River. On a geological map, the exposure shows as a narrow pink band threading through the Riner Quadrangle — narrow but continuous, marking the surface expression of rock that formed a billion years ago. On the ground, it is the rock beneath your feet.'
        },
        {
          title: 'The Significance of the Fault\'s Margin',
          text: 'The rocks exposed at the Freeze Fault are not merely old. They are remnants of the edge of a supercontinent. Around 1.3 billion years ago, the landmass that would eventually become North America — called Laurentia — was involved in a massive continental collision that assembled a supercontinent known as Rodinia. The collision zone, called the Grenville Ore-ig-any, built a mountain range comparable in scale to the modern Himalayas along what is now the eastern margin of the continent. The rocks exposed today at the Freeze Fault are the deeply eroded roots of those mountains, brought back to the surface after more than a billion years underground by the thrust fault\'s action. When you stand on the bank of the Little River in Riner and look at the exposed rock, you are looking at material that formed in the core of an ancient mountain range built during the assembly of a supercontinent that no longer exists.'
        }
      ]
    },
    {
      id: 'movement5',
      label: 'V — The Science',
      anchor: '#movement5',
      segs: [
        {
          title: 'The Hayesville–Freeze–Rockfish Valley Fault System',
          text: 'The Freeze Fault does not stand alone. It is the local expression of one of the great structural features of the eastern Appalachians: the Hayesville-Freeze-Rockfish Valley fault system, which runs the full axial length of the Blue Ridge from central Virginia southward through North Carolina. The HFRV is, in a meaningful sense, the spine of the Blue Ridge. It divides the Grenville-age basement rocks of the province into two distinct massifs: the Pedlar Massif to the northwest and the Lovingston Massif to the southeast. These represent two crustal blocks that were separate landmasses before the Grenville collision welded them together roughly 1.1 billion years ago. The HFRV fault running between them is almost certainly the original suture line: the scar where those two blocks fused. It was later reactivated during the Taconic Ore-ig-any, approximately 480 to 440 million years ago. The New River — one of the oldest river systems in North America — follows the Freeze Fault for a stretch of its path through this area.'
        },
        {
          title: 'Laurentia: The Growth Rings of a Continent',
          text: 'Laurentia — the ancient cray-tahn at the core of North America — did not form all at once. It grew outward over billions of years in a series of distinct accretion events, each one adding a new belt of rock to the growing continent. The oldest material, aged 3.0 to 2.5 billion years, forms the core of what is now central Canada. Younger belts wrap around this core in successive rings. The outermost belt — the one that includes the Freeze Fault — is the Grenville province, aged approximately 1.2 to 0.9 billion years. It runs along what was then the eastern margin of Laurentia: the collision zone. The rock at the Little River is the outermost growth ring of the original continent.'
        },
        {
          title: 'Whitmarsh (1994): The Defining Academic Description',
          text: 'The most precise published description of this specific fault zone comes from a 1994 Virginia Tech thesis by Richard Whitmarsh, who conducted detailed structural field work along the Freeze Fault south of Riner. His definition remains the standard academic characterization of what is happening in the rock beneath the Little River. In his words: The Freeze fault zone south of Riner, Virginia is marked by a ductile, greenschist-facies thrust that places Middle Proterozoic gneiss over deformed Late Proterozoic — Early Paleozoic rocks of the western Blue Ridge province. Ductile thrust refers to plastic rather than brittle deformation — the fault formed deep in the crust where rocks flow under heat and pressure rather than fracture. Greenschist-facies describes moderate metamorphic conditions, roughly 300 to 500 degrees Celsius. The phrase Middle Proterozoic gneiss over deformed Late Proterozoic rocks captures the core of the fault\'s significance: older rock thrust over younger rock, reversing the expected stratigraphic order.'
        },
        {
          title: 'Radiometric Dating of the Little River Gneiss',
          text: 'The age of the rocks has been established through uranium-lead geochronology of zircon crystals within the gneiss. Three independent dating studies have produced consistent results: Sinha and Bartholomew in 1984 obtained 1,130 million years; T.W. Stern and D.W. Rankin obtained 1,117 million years and a complementary lead isotope age of 1,116 million years. All three converge on approximately 1.1 to 1.13 billion years, firmly placing these rocks in the Mesoproterozoic and confirming their Grenville-age origin.'
        },
        {
          title: 'Field Evidence: Mafic Intrusions and Sample Locations',
          text: 'Field maps of the Riner area show mafic dikes and sills intruding through the Precambrian basement rocks on both sides of the fault. These intrusions are the signature of Late Proterozoic rifting: after Rodinia assembled, it began to pull apart, and hot mantle material intruded upward into the crust, leaving trails of iron- and magnesium-rich rock cutting through the older gneiss. Richard Whitmarsh\'s field maps show the fault trace running through the Little River area, with numbered sample collection sites across both the Pilot Gneiss to the north and the Little River Gneiss to the south. The Little River Gneiss is a bluish-gray quartz-feldspar biotite augen gneiss — augen, from the German for eyes, refers to the lens-shaped feldspar crystals visible in the rock\'s banding. Both units are Grenville age and both bear the deformational imprint of the thrust.'
        }
      ]
    },
    {
      id: 'closing',
      label: 'Closing',
      anchor: '#movement5',
      segs: [
        {
          title: 'The fault is not a historical event',
          text: 'All of this — the supercontinent, the Himalayan mountain range, the billion years of burial and erosion and thrust — is still present in the rock. The fault is not a historical event. It is a structural fact, still expressed in the landscape, still shaping the course of rivers, still defining the western edge of the Blue Ridge. The rock on the surface of the ground along Laurel Ridge Mill Road formed in the collision zone of a supercontinent that no longer exists. It has been here, in one form or another, for longer than multicellular life has existed on Earth. You do not need a canyon to find it. It is here. It runs through this land.'
        }
      ]
    }
  ];

  // ─── STATE ───────────────────────────────────────────────────────────────────

  let curSec = 0;
  let curSeg = 0;
  let rate = 1.0;
  let speaking = false;
  let collapsed = false;
  let progTimer = null;
  let progStart = 0;
  let estDur = 0;

  // ─── BUILD UI ────────────────────────────────────────────────────────────────

  const style = document.createElement('style');
  style.textContent = `
    #ftf-player {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      background: #0e0c09;
      border-top: 1px solid #3a3020;
      font-family: 'Source Serif 4', 'Georgia', serif;
      box-shadow: 0 -4px 24px rgba(0,0,0,0.6);
      transition: transform 0.3s ease;
    }
    #ftf-player.collapsed {
      transform: translateY(calc(100% - 38px));
    }
    #ftf-player * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    #ftf-collapse-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      height: 38px;
      background: #0a0907;
      border-bottom: 1px solid #2a2418;
      cursor: pointer;
      user-select: none;
    }
    #ftf-collapse-bar:hover {
      background: #131109;
    }
    #ftf-bar-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    #ftf-bar-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #c8a96e;
      opacity: 0;
      flex-shrink: 0;
      transition: opacity 0.3s;
    }
    #ftf-bar-dot.on {
      opacity: 1;
      animation: ftf-pulse 0.8s ease-in-out infinite;
    }
    @keyframes ftf-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.6); }
    }
    #ftf-bar-title {
      font-size: 12px;
      color: #c8a96e;
      font-family: 'Playfair Display', 'Georgia', serif;
      font-style: italic;
      letter-spacing: 0.01em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 480px;
    }
    #ftf-bar-section {
      font-size: 11px;
      color: #5a4e38;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    #ftf-collapse-toggle {
      font-size: 11px;
      color: #5a4e38;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 4px 8px;
      transition: color 0.2s;
    }
    #ftf-collapse-toggle:hover { color: #a09070; }
    #ftf-main {
      padding: 10px 16px 12px;
    }
    #ftf-seg-info {
      display: flex;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 6px;
    }
    #ftf-seg-section {
      font-size: 10px;
      font-family: 'Source Serif 4', 'Georgia', serif;
      color: #6a5030;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    #ftf-seg-title {
      font-size: 14px;
      font-family: 'Playfair Display', 'Georgia', serif;
      color: #e0d0b0;
      font-style: italic;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #ftf-seg-counter {
      font-size: 10px;
      color: #4a4030;
      white-space: nowrap;
      margin-left: auto;
    }
    #ftf-narration {
      font-size: 12.5px;
      font-family: 'Source Serif 4', 'Georgia', serif;
      color: #a09070;
      line-height: 1.55;
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    #ftf-controls-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #ftf-prog-track {
      flex: 1;
      height: 3px;
      background: #2a2010;
      border-radius: 2px;
      cursor: pointer;
      position: relative;
    }
    #ftf-prog-fill {
      height: 100%;
      background: #c8a96e;
      border-radius: 2px;
      width: 0%;
      transition: width 0.4s linear;
      pointer-events: none;
    }
    .ftf-btn {
      background: transparent;
      border: 1px solid #2e2415;
      color: #7a6040;
      border-radius: 4px;
      cursor: pointer;
      font-size: 11px;
      font-family: 'Source Serif 4', 'Georgia', serif;
      padding: 5px 10px;
      white-space: nowrap;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
      line-height: 1;
    }
    .ftf-btn:hover {
      background: #1e1a10;
      color: #c8a060;
      border-color: #4a3820;
    }
    #ftf-btn-play {
      background: #2e1e08;
      border-color: #6a4a18;
      color: #c8a96e;
      font-size: 12px;
      padding: 6px 16px;
      font-weight: 600;
    }
    #ftf-btn-play:hover {
      background: #3e2a0a;
      color: #f0d080;
    }
    #ftf-rate-group {
      display: flex;
      gap: 3px;
      align-items: center;
    }
    .ftf-rate-btn {
      font-size: 10px;
      padding: 4px 6px;
      background: transparent;
      border: 1px solid #2a2010;
      color: #4a4030;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.15s;
      line-height: 1;
    }
    .ftf-rate-btn.active {
      background: #2e1e08;
      border-color: #6a4a18;
      color: #c8a96e;
    }
    .ftf-rate-btn:hover { color: #907050; }
    #ftf-status {
      font-size: 10px;
      color: #4a4030;
      letter-spacing: 0.04em;
      white-space: nowrap;
      min-width: 56px;
    }
    #ftf-time-right {
      font-size: 10px;
      color: #4a4030;
      min-width: 28px;
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    /* Push page content up so player doesn't overlap footer */
    body { padding-bottom: 130px !important; }
  `;
  document.head.appendChild(style);

  const player = document.createElement('div');
  player.id = 'ftf-player';
  player.innerHTML = `
    <div id="ftf-collapse-bar">
      <div id="ftf-bar-left">
        <span id="ftf-bar-dot"></span>
        <span id="ftf-bar-section">Audio</span>
        <span id="ftf-bar-title">The Freeze Thrust Fault — Site Audio</span>
      </div>
      <button id="ftf-collapse-toggle" title="Hide/show player">Hide ▼</button>
    </div>
    <div id="ftf-main">
      <div id="ftf-seg-info">
        <span id="ftf-seg-section"></span>
        <span id="ftf-seg-title"></span>
        <span id="ftf-seg-counter"></span>
      </div>
      <div id="ftf-narration"></div>
      <div id="ftf-controls-row">
        <button class="ftf-btn" id="ftf-btn-prev">&#9664; Back</button>
        <button class="ftf-btn" id="ftf-btn-play">&#9654; Play</button>
        <button class="ftf-btn" id="ftf-btn-next">Next &#9654;</button>
        <div id="ftf-prog-track">
          <div id="ftf-prog-fill"></div>
        </div>
        <span id="ftf-time-right"></span>
        <div id="ftf-rate-group">
          <button class="ftf-rate-btn" data-r="0.8">0.8×</button>
          <button class="ftf-rate-btn active" data-r="1.0">1×</button>
          <button class="ftf-rate-btn" data-r="1.25">1.25×</button>
          <button class="ftf-rate-btn" data-r="1.5">1.5×</button>
        </div>
        <span id="ftf-status">Ready</span>
      </div>
    </div>
  `;
  document.body.appendChild(player);

  // ─── ELEMENT REFS ────────────────────────────────────────────────────────────

  const barDot        = document.getElementById('ftf-bar-dot');
  const barTitle      = document.getElementById('ftf-bar-title');
  const barSection    = document.getElementById('ftf-bar-section');
  const collapseToggle= document.getElementById('ftf-collapse-toggle');
  const collapseBar   = document.getElementById('ftf-collapse-bar');
  const segSection    = document.getElementById('ftf-seg-section');
  const segTitle      = document.getElementById('ftf-seg-title');
  const segCounter    = document.getElementById('ftf-seg-counter');
  const narration     = document.getElementById('ftf-narration');
  const btnPlay       = document.getElementById('ftf-btn-play');
  const btnPrev       = document.getElementById('ftf-btn-prev');
  const btnNext       = document.getElementById('ftf-btn-next');
  const progFill      = document.getElementById('ftf-prog-fill');
  const timeRight     = document.getElementById('ftf-time-right');
  const statusEl      = document.getElementById('ftf-status');

  // ─── HELPERS ─────────────────────────────────────────────────────────────────

  function totalSegs() {
    return SECTIONS.reduce((t, s) => t + s.segs.length, 0);
  }

  function globalIdx() {
    let g = 0;
    for (let i = 0; i < curSec; i++) g += SECTIONS[i].segs.length;
    return g + curSeg + 1;
  }

  function render() {
    const sec = SECTIONS[curSec];
    const seg = sec.segs[curSeg];
    segSection.textContent = sec.label;
    segTitle.textContent = seg.title;
    segCounter.textContent = globalIdx() + ' / ' + totalSegs();
    narration.textContent = seg.text;
    barSection.textContent = sec.label;
    barTitle.textContent = seg.title;
    progFill.style.width = '0%';
    timeRight.textContent = '';
    setStatus('Ready');
  }

  function setStatus(txt) {
    statusEl.textContent = txt;
  }

  function scrollToSection(anchor) {
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ─── SPEECH ──────────────────────────────────────────────────────────────────

  function stop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speaking = false;
    clearInterval(progTimer);
    progFill.style.width = '0%';
    timeRight.textContent = '';
    barDot.classList.remove('on');
    btnPlay.innerHTML = '&#9654; Play';
    setStatus('Ready');
  }

  function speak() {
    if (!window.speechSynthesis) {
      setStatus('No TTS');
      return;
    }
    const sec = SECTIONS[curSec];
    const seg = sec.segs[curSeg];
    const text = seg.title + '. ' + seg.text;

    const u = new SpeechSynthesisUtterance(text);
    u.rate = rate;
    u.pitch = 0.95;
    u.volume = 1.0;

    const wordCount = text.split(/\s+/).length;
    estDur = (wordCount / (rate * 2.5)) * 1000;
    progStart = Date.now();

    progTimer = setInterval(function () {
      const elapsed = Date.now() - progStart;
      const pct = Math.min((elapsed / estDur) * 100, 97);
      progFill.style.width = pct + '%';
      const secsLeft = Math.max(0, Math.round((estDur - elapsed) / 1000));
      timeRight.textContent = secsLeft + 's';
    }, 300);

    u.onstart = function () {
      speaking = true;
      barDot.classList.add('on');
      btnPlay.innerHTML = '&#9646;&#9646; Pause';
      setStatus('Speaking');
    };

    u.onend = function () {
      speaking = false;
      clearInterval(progTimer);
      progFill.style.width = '100%';
      timeRight.textContent = '';
      barDot.classList.remove('on');
      btnPlay.innerHTML = '&#9654; Play';
      setStatus('Done');
      setTimeout(function () {
        if (!speaking) advance();
      }, 700);
    };

    u.onerror = function () {
      stop();
      setStatus('Error');
    };

    window.speechSynthesis.speak(u);
  }

  function advance() {
    const sec = SECTIONS[curSec];
    if (curSeg < sec.segs.length - 1) {
      curSeg++;
      render();
      speak();
    } else if (curSec < SECTIONS.length - 1) {
      curSec++;
      curSeg = 0;
      render();
      scrollToSection(SECTIONS[curSec].anchor);
      speak();
    } else {
      setStatus('Complete');
      progFill.style.width = '100%';
    }
  }

  // ─── EVENTS ──────────────────────────────────────────────────────────────────

  btnPlay.addEventListener('click', function () {
    if (speaking) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        btnPlay.innerHTML = '&#9646;&#9646; Pause';
        barDot.classList.add('on');
        setStatus('Speaking');
      } else {
        window.speechSynthesis.pause();
        btnPlay.innerHTML = '&#9654; Resume';
        barDot.classList.remove('on');
        setStatus('Paused');
        clearInterval(progTimer);
      }
    } else {
      speak();
    }
  });

  btnPrev.addEventListener('click', function () {
    stop();
    if (curSeg > 0) {
      curSeg--;
    } else if (curSec > 0) {
      curSec--;
      curSeg = SECTIONS[curSec].segs.length - 1;
    }
    render();
    scrollToSection(SECTIONS[curSec].anchor);
  });

  btnNext.addEventListener('click', function () {
    stop();
    const sec = SECTIONS[curSec];
    if (curSeg < sec.segs.length - 1) {
      curSeg++;
    } else if (curSec < SECTIONS.length - 1) {
      curSec++;
      curSeg = 0;
    }
    render();
    scrollToSection(SECTIONS[curSec].anchor);
  });

  document.querySelectorAll('.ftf-rate-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      rate = parseFloat(b.dataset.r);
      document.querySelectorAll('.ftf-rate-btn').forEach(function (x) {
        x.classList.remove('active');
      });
      b.classList.add('active');
      if (speaking) { stop(); speak(); }
    });
  });

  collapseBar.addEventListener('click', function (e) {
    if (e.target === collapseToggle || e.target === collapseBar ||
        e.target.id === 'ftf-bar-left' || e.target.id === 'ftf-bar-title' ||
        e.target.id === 'ftf-bar-section' || e.target.id === 'ftf-bar-dot') {
      collapsed = !collapsed;
      player.classList.toggle('collapsed', collapsed);
      collapseToggle.textContent = collapsed ? 'Show ▲' : 'Hide ▼';
      document.body.style.paddingBottom = collapsed ? '42px' : '130px';
    }
  });

  // Progress bar click to seek (approximate)
  document.getElementById('ftf-prog-track').addEventListener('click', function (e) {
    if (!speaking) return;
    const rect = this.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    progFill.style.width = (pct * 100) + '%';
  });

  // ─── INIT ────────────────────────────────────────────────────────────────────

  render();

})();
