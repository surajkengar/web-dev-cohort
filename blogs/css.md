# CSS Concepts

Today in class, I learned several CSS concepts. Let’s explore them in this blog.

CSS stands for **Cascading Style Sheets**. It is used to style and design the structure created using HTML.

---

## 🎨 What is CSS?

CSS describes **how HTML elements should look** on a web page — including colors, fonts, spacing, and layout.

It allows web developers to separate **content (HTML)** from **presentation (CSS)**.

---

## 📌 Types of CSS

1. **Inline CSS**  
   Added directly inside an HTML element using the `style` attribute.
   ```html
   <p style="color: blue;">This is inline CSS.</p>
   ```

2. **Internal CSS**  
   Written inside the `<style>` tag in the `<head>` section.
   ```html
   <style>
     p {
       color: green;
     }
   </style>
   ```

3. **External CSS**  
   Stored in a separate `.css` file and linked using `<link>`.
   ```html
   <link rel="stylesheet" href="style.css">
   ```

---

## 🎯 CSS Syntax

A CSS rule consists of a **selector** and a **declaration block**.

```css
selector {
  property: value;
}
```

**Example:**
```css
h1 {
  color: red;
  font-size: 24px;
}
```

- **Selector:** specifies which HTML element(s) to style (`h1`)
- **Property:** what you want to change (`color`, `font-size`)
- **Value:** how you want to change it (`red`, `24px`)

---

## 🧩 CSS Selectors

1. **Element Selector**
   ```css
   p { color: blue; }
   ```

2. **ID Selector**
   ```css
   #main-title { font-size: 30px; }
   ```

3. **Class Selector**
   ```css
   .highlight { background-color: yellow; }
   ```

4. **Group Selector**
   ```css
   h1, h2, h3 { color: purple; }
   ```

5. **Universal Selector**
   ```css
   * { margin: 0; padding: 0; }
   ```

6. **Descendant Selector**
   ```css
   div p { color: gray; }
   ```

---

## 🧠 CSS Box Model

Every HTML element is a **box** consisting of:

- **Content:** The text or image inside the box  
- **Padding:** Space between content and border  
- **Border:** Surrounds the padding  
- **Margin:** Space outside the border

```css
div {
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
}
```

---

## 🌈 Common CSS Properties

| Property | Description | Example |
|-----------|--------------|----------|
| `color` | Text color | `color: red;` |
| `background-color` | Background color | `background-color: yellow;` |
| `font-size` | Font size | `font-size: 20px;` |
| `font-family` | Font type | `font-family: Arial;` |
| `text-align` | Text alignment | `text-align: center;` |
| `margin` | Space outside an element | `margin: 10px;` |
| `padding` | Space inside an element | `padding: 15px;` |
| `border` | Border style | `border: 1px solid black;` |
| `width` / `height` | Element size | `width: 100px; height: 50px;` |

---

## 🧱 CSS Layout

1. **Display Property**
   - `block`, `inline`, `inline-block`, `flex`, `grid`, `none`

2. **Position Property**
   - `static`, `relative`, `absolute`, `fixed`, `sticky`

3. **Flexbox**
   - Used for aligning elements easily.
   ```css
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```

4. **Grid**
   - Used to create 2D layouts.
   ```css
   .grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 10px;
   }
   ```

---

## 💡 CSS Colors

Colors can be defined in multiple ways:
```css
color: red;           /* Named color */
color: #ff0000;       /* Hex value */
color: rgb(255, 0, 0);/* RGB value */
color: rgba(255, 0, 0, 0.5); /* Transparency */
```

---

## 🪄 CSS Transitions & Animations

### Transition Example:
```css
button {
  background: blue;
  transition: 0.3s;
}

button:hover {
  background: green;
}
```

### Animation Example:
```css
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}

div {
  position: relative;
  animation: move 2s infinite;
}
```

---

✍️ _This is a summary of what I learned today. By mastering CSS, I can control the look and feel of any webpage beautifully._

