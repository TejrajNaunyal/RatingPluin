import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  return (
    <div {...useBlockProps.save()} className="map-block">
     <iframe
                width={width}
                height={height}
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyArKguNxs3V5_j8SLzpKxjDM4G0G5ZkhA0&q=${(address)}`}
                allowFullScreen
            ></iframe>
    </div>
  );
}
