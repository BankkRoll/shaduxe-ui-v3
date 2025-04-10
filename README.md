# shaduxe/ui v3

![og-meta](https://github.com/user-attachments/assets/2f571cbc-fa29-476e-b6e4-88e5372c69dc)

**shaduxe/ui v3** is a built off [shadcn/ui](https://ui.shadcn.com), and now built with **Tailwind v3** to deliver advanced and beautifully designed components. With shaduxe/ui, you can install, customize, and deploy accessible and reusable components effortlessly.

> Looking for Tailwind v4 version? Check out [shaduxe-ui repository](https://github.com/BankkRoll/shaduxe-ui) or visit [shaduxe.com](https://ui.shaduxe.com/)

---

## Key Features

1. **Component Variants**
   - Provides a range of prebuilt variants for components like buttons, switches, tabs, avatars, and more
   - Designed to meet diverse design requirements while maintaining consistency

2. **CLI Integration**
   - Install components directly from the shaduxe/ui registry using the `shadcn CLI`
   - Simplifies setup, letting you focus on building rather than configuring

3. **Customization**
   - Easily adaptable to your project's theme and requirements
   - Extend or override styles without breaking functionality

---

## Quick Start Guide

### Step 1: Install shaduxe/ui Components

To integrate shaduxe/ui into your project, use the `shadcn CLI` to install any component from the shaduxe/ui registry. 

Run the following command:
```bash
npx shadcn@latest add "https://v3.shaduxe.com/r/[component-name]"
```

- Replace `[component-name]` with the specific component you want to install (e.g., `button`, `avatar`, `tabs`).
- This will automatically download and configure the selected component for your project.

---

### Step 2: Customizing Components

1. After installation, locate the component files in your `components` directory.
2. Modify styles and variants using your preferred styling approach with Tailwind v3.
3. Extend functionality by adding new props or utility hooks as needed.

---

### Example: Adding a Button

To add a `button` component, run:
```bash
npx shadcn@latest add "https://v3.shaduxe.com/r/button"
```

This will:
- Download the `button` component and its dependencies.
- Register it in your project for immediate use.

Once installed, use it in your application like this:
```jsx
import { Button } from "@/components/button";

export default function Example() {
  return (
    <Button variant="outline">
      Click Me
    </Button>
  );
}
```

---

## License

shaduxe/ui v3 is released under the [MIT license](LICENSE), ensuring freedom to use, modify, and distribute within your projects.

---

## Contributing

We welcome contributions to improve shaduxe/ui v3! Here's how you can help:

1. **Open an Issue**: Found a bug or have a feature request? Open an issue describing what you'd like to change, fix, or add.

2. **Submit a Pull Request**:
   - Fork the [GitHub repository](https://github.com/BankkRoll/shaduxe-ui-v3)
   - Create your branch (`git checkout -b feature/new-component`)
   - Make your changes
   - Submit a pull request with a clear description of your improvements

3. **Share Ideas**: Suggestions for new components or variants are always welcome!

---

## Support

Need help? Here are some options:

- **Open an Issue**: If you encounter any bugs or have questions, please [open an issue](https://github.com/BankkRoll/shaduxe-ui-v3/issues/new) with details about your problem or question
- **Documentation**: Check our documentation for guides and examples
- **Community**: Join our community discussions in the repository's Discussions tab 
