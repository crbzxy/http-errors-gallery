import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-space">
        <div className="gallery-title">HTTP ERRORS // DIY EXHIBITION</div>

        {/* Luces */}
        <div className="ceiling-lights">
          <div className="light-beam"></div>
          <div className="light-beam"></div>
          <div className="light-beam"></div>
          <div className="light-beam"></div> {/* agregado */}
        </div>

        {/* 400 */}
        <div className="installation error-400">
          <div className="crumpled-papers"></div>
          <div className="old-monitor">
            <div className="monitor-screen">
              <div className="glitch-text">4∅∅</div>
            </div>
          </div>
          <div className="error-label">400 Bad Request</div>
        </div>

        {/* 401 */}
        <div className="installation error-401">
          <div className="pet-wall">
            <div className="tape-strips"></div>
            <div className="metal-lock">
              <div className="blue-led"></div>
            </div>
          </div>
          <div className="error-label">401 Unauthorized</div>
        </div>

        {/* 403 */}
        <div className="installation error-403">
          <div className="cable-cluster">
            <div className="ethernet-cable"></div>
            <div className="usb-cable"></div>
            <div className="red-led-strip"></div>
            <div className="wooden-frame">
              <div className="frame-led"></div>
            </div>
          </div>
          <div className="error-label">403 Forbidden</div>
        </div>

        {/* 404 */}
        <div className="installation error-404">
          <div className="photo-frames">
            <div className="frame"><div className="led-lamp"></div></div>
            <div className="frame white"><div className="led-lamp"></div></div>
            <div className="frame"><div className="led-lamp"></div></div>
          </div>
          <div className="not-found-text">404 NOT FOUND</div>
          <div className="error-label">404 Not Found</div>
        </div>

        {/* 500 */}
        <div className="installation error-500">
          <div className="tv-tower">
            <div className="old-tv">
              <div className="tv-screen"><div className="tv-static"></div></div>
              <div className="hidden-red-led"></div>
            </div>
            <div className="old-tv" style={{ marginLeft: "15px", marginTop: "-10px" }}>
              <div className="tv-screen"><div className="tv-static"></div></div>
              <div className="hidden-red-led"></div>
            </div>
            <div className="stack-trace">ERROR<br/>500<br/>STACK</div>
          </div>
          <div className="error-label">500 Internal Server Error</div>
        </div>

        {/* Info */}
        <div className="exhibition-info">
          <strong>HTTP ERRORS EXHIBITION</strong><br/>
          Una exploración DIY de errores digitales usando objetos reciclados y tecnología low-cost.<br/>
          <em>Materiales: monitores CRT, botellas PET, cables ethernet, LEDs de Steren, laptops usadas.</em>
        </div>

        <div className="floor"></div>
      </div>
    </div>
  );
}
