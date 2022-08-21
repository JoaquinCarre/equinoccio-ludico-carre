import React from "react";
import { Link } from 'react-router-dom';

const OrderWidget = () => {
    return (
        <Link to="/order" className="mx-3">
            <button className="p-1 btn btn-outline-primary position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" version="1.1" viewBox="0 0 700 700">
                    <path d="m402.5 87.5c-0.015625 13.918-5.5508 27.266-15.395 37.105-9.8398 9.8438-23.188 15.379-37.105 15.395h-70c-18.758 0-36.09-10.008-45.465-26.25-9.3789-16.242-9.3789-36.258 0-52.5 9.375-16.242 26.707-26.25 45.465-26.25h70c13.918 0.015625 27.266 5.5508 37.105 15.395 9.8438 9.8398 15.379 23.188 15.395 37.105zm140 315c0 32.488-12.906 63.648-35.879 86.621s-54.133 35.879-86.621 35.879-63.648-12.906-86.621-35.879-35.879-54.133-35.879-86.621 12.906-63.648 35.879-86.621 54.133-35.879 86.621-35.879c32.477 0.039062 63.613 12.957 86.578 35.922s35.883 54.102 35.922 86.578zm-79.672 19.348-25.328-12.664v-59.184c0-6.2539-3.3359-12.031-8.75-15.156s-12.086-3.125-17.5 0-8.75 8.9023-8.75 15.156v70c0 3.25 0.90625 6.4375 2.6133 9.1992 1.707 2.7656 4.1523 5 7.0586 6.4531l35 17.5c5.5898 2.7812 12.238 2.3711 17.445-1.0742 5.207-3.4414 8.1875-9.3984 7.8164-15.633-0.36719-6.2305-4.0273-11.793-9.6055-14.598zm-183.7 50.652h-69.129c-13.918-0.015625-27.266-5.5508-37.105-15.395-9.8438-9.8398-15.379-23.188-15.395-37.105v-297.5c0.039062-11.086 3.5898-21.871 10.148-30.809 6.5586-8.9375 15.781-15.566 26.34-18.93-0.91406 4.8594-1.4141 9.793-1.4883 14.738 0.027344 23.199 9.2539 45.438 25.66 61.84 16.402 16.406 38.641 25.633 61.84 25.66h70c23.199-0.027344 45.438-9.2539 61.84-25.66 16.406-16.402 25.633-38.641 25.66-61.84-0.074219-4.9453-0.57422-9.8789-1.4883-14.738 10.559 3.3633 19.781 9.9922 26.34 18.93 6.5586 8.9375 10.109 19.723 10.148 30.809v131.65c-51.512-18.125-108.73-8.3477-151.31 25.852h-93.691c-6.2539 0-12.031 3.3359-15.156 8.75s-3.125 12.086 0 17.5 8.9023 8.75 15.156 8.75h61.715c-7.3008 10.883-13.203 22.641-17.566 35h-44.148c-6.2539 0-12.031 3.3359-15.156 8.75s-3.125 12.086 0 17.5 8.9023 8.75 15.156 8.75h36.191c-3.3125 30.043 2.043 60.406 15.438 87.5zm-69.129-245c0 4.6406 1.8438 9.0938 5.125 12.375s7.7344 5.125 12.375 5.125h175c6.2539 0 12.031-3.3359 15.156-8.75s3.125-12.086 0-17.5-8.9023-8.75-15.156-8.75h-175c-4.6406 0-9.0938 1.8438-12.375 5.125s-5.125 7.7344-5.125 12.375z" />
                </svg>
                <span class="badge position-absolute top-0 start-100 translate-middle bg-danger">!</span>
            </button>
        </Link>
    )
}

export default OrderWidget;