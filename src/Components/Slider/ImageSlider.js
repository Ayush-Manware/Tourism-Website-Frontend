import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://images.unsplash.com/photo-1672348687086-8b46c996341c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGluZGlhbiUyMHRvdXJpc218ZW58MHwwfDB8fHww" },
    { url: "https://images.unsplash.com/photo-1706186799964-5c4549ca7c54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGluZGlhbiUyMHRvdXJpc218ZW58MHwwfDB8fHww" },
    { url: "https://images.unsplash.com/photo-1705112306531-fa144a005bdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGluZGlhbiUyMHRvdXJpc218ZW58MHwwfDB8fHww" },
    { url: "https://images.unsplash.com/photo-1705861145347-254fcb6685d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMHRvdXJpc218ZW58MHwwfDB8fHww" },
    { url: "https://images.unsplash.com/photo-1693560192936-aaaeba716b13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluZGlhbiUyMHRvdXJpc218ZW58MHwwfDB8fHww" },
    { url: "https://images.unsplash.com/photo-1651057279459-e8836f69c423?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhbiUyMHRvdXJpc218ZW58MHwwfDB8fHww" },
    { url: "https://images.unsplash.com/photo-1651478881270-6c3a0fc883f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGluZGlhbiUyMHRvdXJpc218ZW58MHwwfDB8fHww" },
];

export default function ImageSlider() {
    return (
        <SimpleImageSlider
            width={"100%"} height={400} images={images}
            showBullets={true} showNavs={true}
            slideDuration={0.5} autoPlay />
    )
}