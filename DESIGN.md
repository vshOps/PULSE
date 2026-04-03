# PULSE: Care OS Design System - "The Sentinel Ethos"

## 1. Overview & Creative North Star
**The Creative North Star: "The Silent Commander"**
This design system is built to evoke the feeling of a high-stakes mission control center—powerful, calm, and hyper-intelligent. We are moving away from the "clinical" and "sterile" aesthetic of traditional healthcare software. Instead, we embrace a high-end, editorial-dark aesthetic that treats medical data with the gravity and sophistication of aerospace engineering.

To break the "template" look, we utilize **intentional asymmetry**. Vital data shouldn't always sit in a perfect grid; use varying column widths and "bleeding" edge-to-edge components to create a sense of expansive, limitless monitoring. This is a system where silence speaks volumes—utilize vast negative space to ensure that when an alert appears, it carries the weight of a command.

## 2. Typography: Geometric Authority
We pair the brutalist, tech-forward geometry of **Space Grotesk** with the humanistic clarity of **Manrope**.

*   **Display & Headlines (Space Grotesk):** These are your "Data Anchors." Use `display-lg` for critical scores (e.g., Patient Heart Rate). The tight kerning and geometric "G" and "Q" convey a sense of proprietary technology.
*   **Body & Labels (Manrope):** All functional reading happens here. Manrope’s taller x-height ensures legibility under high-stress monitoring environments.

**The Editorial Scale:**
*   **Critical Vitals:** `display-lg` (3.5rem) / Space Grotesk.
*   **Section Headers:** `headline-sm` (1.5rem) / Space Grotesk.
*   **Functional Data:** `body-md` (0.875rem) / Manrope.

## 3. Colors: Tonal Depth
Our palette is rooted in deep obsidians and nocturnal violets. This is not a flat UI; it is an environment of depth.

| Color Role | Hex Code | Description |
| :--- | :--- | :--- |
| **Primary** | `#c7bfff` | Main interaction color, luminous violet. |
| **Primary Container** | `#8e7fff` | Used for gradients (`primary` to `primary_container`). |
| **Secondary** | `#5cdcaf` | Teal replacing standard "Success Green", premium tech-forward palette. |
| **Tertiary** | `#ffb2ba` | Coral/Amber hue for warnings & alerts. |
| **Background / Surface** | `#111319` | Base layer. The infinite void. |
| **Surface Container Low** | `#191c21` | Large structural blocks sectioning. |
| **Surface Container** | `#1d2025` | Primary card containers. |
| **Surface Container High** | `#272a30` | Used at 80% opacity with blur for floating elements. |
| **Surface Container Highest**| `#32353b` | Elevated contexts, popovers, and active states. |
| **On Surface** | `#e1e2ea` | Avoid pure white (#FFFFFF) to reduce eye strain. |
| **Outline Variant** | `#474554` | "Ghost Border" used at 10% opacity for slight boundaries. |

## 4. UI Rendering Rules & Depth

### Surface Hierarchy & Nesting
We achieve structure through **Tonal Layering** rather than borders.
- **The Layering Principle:** To create a card, place a `surface_container` element on top of a `surface_dim` background. The contrast is felt, not seen.
- **Ambient Shadows:** For floating elements, use a "Sentinel Shadow": `0px 24px 48px rgba(0, 0, 0, 0.4)`. Never use harsh, dark-grey drop shadows.
- **The Ghost Border:** If a boundary is strictly required for accessibility, use a `1px` stroke of `outline_variant` at **10% opacity**. It should be a suggestion of a line, not a statement.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid lines to separate content sections. Boundaries must be defined through background shifts (e.g., a `surface_container_low` sidebar against a `surface` background). This creates a seamless, "molded" look rather than a fragmented one.

### Signature Textures: Glass & Gradients
- **The Glass Rule:** Floating elements (Modals, Hover Cards) must use `surface_container_high` (`#272a30`) at 80% opacity with a `20px` backdrop-blur. 
- **The Glow:** Primary actions should use a linear gradient: `primary` (#c7bfff) to `primary_container` (#8e7fff) at a 135-degree angle. This provides a tactile "soul" to the interface.

## 5. Signature Components

### Vital Chips (The Pulse)
Vitals are the heartbeat of the system. They use a "soft-glow" background.
- **Normal:** `secondary_container` background with `on_secondary_container` text.
- **Warning:** `tertiary_container` (Amber/Coral) with a subtle outer pulse animation.
- **Critical:** `error_container` background, high-contrast `on_error_container` text, and a 2px `error` "Ghost Border."

### Mirror Score Indicators
The Mirror Score represents patient stability. It should be rendered as a **Large Display Score** over a **Gradient Blur**.
- **Score 80-100:** `secondary` (#5cdcaf) glow.
- **Score 50-79:** `primary` (#c7bfff) glow.
- **Score <50:** `tertiary` (#ffb2ba) glow.
- *Visual Style:* The score sits in the center, with a wide, soft-diffused radial gradient of the color glowing behind the text.

### Circular Ring Charts
- **Stroke:** Use a `12px` stroke width with rounded caps (`stroke-linecap: round`).
- **Depth:** The "track" of the chart should be `surface_container_highest`. 
- **Accent:** The progress bar should use the Primary-to-Secondary gradient to represent "Fluidity."

### Buttons & Inputs
- **Primary Button:** Gradient-filled (`primary` to `primary_container`), `md` (0.375rem / 6px) corner radius. No border.
- **Input Fields:** `surface_container_lowest` background. Only a bottom-border (Ghost Border style) that illuminates to 100% `primary` color on focus.

## 6. Do’s and Don’ts
### Do:
- **Do** embrace extreme white space. Let the data breathe like a high-end magazine.
- **Do** use "Optical Alignment." Sometimes geometric centering looks wrong; trust your eye to balance heavy data blocks.
- **Do** use `0.25rem` (4px) as your base spacing unit, but jump to `2rem` or `4rem` for section breathing room.

### Don't:
- **Don't** use pure white (#FFFFFF) for text. Always use `on_surface` (#e1e2ea) to reduce eye strain in dark environments.
- **Don't** use standard "Success Green." Use our `secondary` Teal (#5cdcaf) to maintain the premium, tech-forward palette.
- **Don't** use shadows on cards that are nested. Only "floating" components get shadows.
- **Don't** use dividers. If you feel you need a divider, increase the vertical margin instead.
