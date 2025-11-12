# Campaign Logos

This folder contains logos of winning campaigns that Boyce Consulting has worked with.

## Usage

Place campaign logos in this directory and reference them in your components like:

```tsx
<Image
  src="/images/campaigns/campaign-logo.png"
  alt="Campaign Name"
  width={200}
  height={100}
/>
```

## File Naming Convention

Use descriptive, lowercase filenames with hyphens:
- `candidate-name-2024.png`
- `party-name-campaign.svg`
- `organization-logo.jpg`

## Recommended Formats

- **SVG**: Best for scalable vector logos
- **PNG**: For logos with transparency
- **JPG**: For photographic images

## Image Optimization

- Keep file sizes under 200KB when possible
- Use appropriate dimensions (recommended: 400x200px for consistency)
- Optimize images before uploading using tools like TinyPNG or ImageOptim
