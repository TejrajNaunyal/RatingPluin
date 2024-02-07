import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  return (
    <div {...useBlockProps.save()} className="map-block">
      <iframe
        title="Map"
        width="100%"
        height="400"
       
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${attributes.mapUrl}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}
