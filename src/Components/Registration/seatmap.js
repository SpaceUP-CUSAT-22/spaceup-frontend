import { SeatsioSeatingChart } from '@seatsio/seatsio-react';
import './seatmap.css';
import { useState } from 'react';

function SeatMap() {
    const [selected, setSelected] = useState([]);
    let chart = null;
    return (
        <div className="booking_seat" >
            <div className="booking_seat_map">
            <SeatsioSeatingChart
                workspaceKey="0a97b2cc-94c1-490d-a337-c9293048df73"
                event="0f3c7e81-4cbb-4a17-9f69-82c7be6b216b"
                onRenderStarted={createdChart => { chart = createdChart }}
                region="oc"
            />
            </div>
            <div className='button_div'>
                <button className='book_now_btn' onClick={console.log("Booked")}>Book Now</button>
            </div>
        </div>
    );
}

export default SeatMap;