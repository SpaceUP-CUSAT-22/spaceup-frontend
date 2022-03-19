import { SeatsioSeatingChart } from '@seatsio/seatsio-react';
import './seatmap.css';

function SeatMap() {
    return (
        <div className="booking_seat" >
            <SeatsioSeatingChart
                workspaceKey="0a97b2cc-94c1-490d-a337-c9293048df73"
                event="0f3c7e81-4cbb-4a17-9f69-82c7be6b216b"
                region="oc"
            />
            <div className='button_div'>
                <button className='book_now_btn'>Book Now</button>
            </div>
        </div>
    );
}

export default SeatMap;