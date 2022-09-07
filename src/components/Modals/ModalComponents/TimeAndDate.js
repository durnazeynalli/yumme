import React from "react";
import styled from "styled-components";
// import TimePicker from 'react-time-picker';


import COLORS from "../../../styles/colors";

import { AiFillCaretDown } from "react-icons/ai";

const TimeAndDate = ({ cancel, positionStyle , continueBtn}) => {
    // const [value, onChange] = useState('10:00');

    return (
        <Container>
            <Text>Time</Text>
            <TimeRow>
            {/* <TimePicker 
                onChange={onChange} 
                value={value}
                clockIcon=""
                clearIcon=""
                openClockOnFocus={false}
                autoFocus={false}
                amPmAriaLabel="aAM/PM"
                placeholder="Select Time"
            /> */}

                <Row>
                    <TimeBorder>
                        <Row>
                            <TextInput type="text" placeholder="Choose time" />
                            <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                        </Row>
                    </TimeBorder>
                    <AMBorder>
                        <Row>
                            <TextInput type="text" placeholder="AM" />
                            <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                        </Row>
                    </AMBorder>
                </Row>
            </TimeRow>     
            <Border>
                <TextInput type="text" placeholder="Choose date" />
            </Border>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 60px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 0;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    margin: 10px 0;
    padding: 10px 20px;
`;

const TimeRow = styled.div`
    margin: 10px 0;
`;

const TimeBorder = styled.div`
    width: 67%;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
`;

const AMBorder = styled.div`
    width: 27%;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

export default TimeAndDate;