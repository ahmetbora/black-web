"use client";

import { useState } from "react";

export default function BlackMap() {
    const [mapOpen, setMapOpen] = useState(false);
    return (
        <>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.451187435443!2d29.30540337664497!3d40.927777771361946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadb1f90c2b78d%3A0xa1db18057d36ed64!2sBlack%20Music%20Sanat%20Okulu!5e0!3m2!1str!2str!4v1730202914008!5m2!1str!2str"
                width={600}
                height={450}
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
            />
        </>
    );
}