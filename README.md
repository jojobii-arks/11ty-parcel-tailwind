# 11ty + Tailwind CSS via Parcel and PostCSS

## Development server

```
  npm run dev
```

11ty watches for changes in template files and outputs to `.predist`
Parcel watches for changes in `.predist` and outputs/serves from `dist`

## Build for hosting

```
  npm run build
```

Outputs to `dist`, serve with `dist` as root.
