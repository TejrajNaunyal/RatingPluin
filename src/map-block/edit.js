import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useState } from "react";
import { TextControl, RangeControl } from "@wordpress/components";
import { PanelBody } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
    const { width, height } = attributes;
    const [address, setAddress] = useState(attributes.address);

    const blockProps = useBlockProps();

    const handleAddressChange = (value) => {
        setAddress(value);
        setAttributes({ address: value }); 
    };

    const handleWidthChange = (newWidth) => {
        setAttributes({ width: newWidth });
    };

    const handleHeightChange = (newHeight) => {
        setAttributes({ height: newHeight });
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__("Block Settings", "map-block")}>
                    <TextControl
                        label={__("Search Address", "map-block")}
                        value={address}
                        onChange={handleAddressChange}
                        placeholder={__("Enter a new place", "map-block")}
                    />

                    <RangeControl
                        label={__("Width (in pixels)", "map-block")}
                        value={width}
                        onChange={handleWidthChange}
                        min={100}
                        max={1000}
                    />
                    <RangeControl
                        label={__("Height (in pixels)", "map-block")}
                        value={height}
                        onChange={handleHeightChange}
                        min={100}
                        max={1000}
                    />
                </PanelBody>
            </InspectorControls>
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

