export default function PaletteFooter({ paletteName, emoji }) {
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}
