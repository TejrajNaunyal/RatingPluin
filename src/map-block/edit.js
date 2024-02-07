import { __ } from "@wordpress/i18n";
import { useBlockProps, TextControl, InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const onMapUrlChange = (mapUrl) => {
    setAttributes({ mapUrl });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Map Settings", "map-block")}>
          <TextControl
            label={__("Map URL", "map-block")}
            value={attributes.mapUrl}
            onChange={onMapUrlChange}
            placeholder={__("Enter map URL...", "map-block")}
          />
        </PanelBody>
      </InspectorControls>

      <div className="map-block">
        <iframe
          title="Map"
          width="100%"
          height="400"
        
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${attributes.mapUrl}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
