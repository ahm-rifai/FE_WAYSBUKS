import React from 'react'
import { Container } from 'react-bootstrap'
import List from './CARD/List';

const styles = {
    relative: {
        display: "block",
        position: "relative",
        margin: "40px 180px 0 50px",
        backgroundColor: "#BD0707",
    },

    absolute: {
        position: "absolute",
        marginLeft: "10px",
        top: "5%",
        left: "38%",
        width: "100%",
        height: "85%",
    },

    rainbow: {
        color: "#BD0707",
    },
};


function Landings() {
    return (
        <Container>
            <div className='p-5 rounded' style={styles.relative}>
                <h1 className='text-white fw-bold fs-1'>WAYSBUCKS</h1>
                <p className='text-light mt-3 fs-4'>Things are changing, but we’re still here for you</p>
                <p className='text-light  mt-3'>We have temporarily closed our in-store cafes, but select <br></br> grocery and drive-thru locations remaining open. <br></br> <span className='fw-bold'>Waysbucks</span> Drivers is also available <br></br> <br></br> Let’s Order... <br></br> <br></br></p>

                <div className='rounded' style={styles.absolute}>
                    <img src="/Assets/coffees.svg" alt="images"  width="100%" height="100%"/>
                </div>
            </div>

            <div className='px-5 my-5' style={styles.rainbow}>
                <h2 className='fw-bold'>Let’s Order</h2>

                <div className='d-flex mt-5'>
                    
                    <List/>
                    
                </div>
            </div>
        </Container>


    );
}

export default Landings;