export default function HeaderFooter(props) {
  return (
    <>
      <div>
        <div className="HeaderFooterColorBar" />
        <div className="Logo">HappyCards</div>
      </div>
      {props.children}
      <div>
        <div className="Copyright">&copy; 2022 Andrew Pethoud</div>
        <div className="HeaderFooterColorBar" />
      </div>
    </>
  );
}
