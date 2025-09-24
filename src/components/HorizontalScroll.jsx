import { Scrollbar } from "react-scrollbars-custom";

export default function HorizontalScroll({ children }) {
  return (<>
    <Scrollbar
      noScrollX={false}   // enable horizontal scrolling
      noScrollY={true}    // disable vertical scrolling
      trackYProps={{ style: { display: "none" } }} // hide vertical track
      style={{ width: "100%", height: 270 }}       // scroll container height
      thumbXProps={{
        style: {
          backgroundColor: "#2f62a1",
          borderRadius: "8px",
          height: "2.5px",
          marginBottom: "4px",
        },
      }}
      trackXProps={{
        style: {
          height: "2.5px",
          marginBottom: "0px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
        },
      }}
    >
        
      <div style={{ display: "flex", gap: "16px" }}>
        
        {children}

      </div>
      
    </Scrollbar>

    
  </>);
}
