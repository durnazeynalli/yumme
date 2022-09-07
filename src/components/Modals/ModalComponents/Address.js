import React from "react";
import styled from "styled-components";
// import Select from "react-select";
// import { Country, State, City } from "country-state-city";

import COLORS from "../../../styles/colors";

import { AiFillCaretDown } from "react-icons/ai";


const Address = () => {
    
    // console.log(Country.getAllCountries());
    // console.log(State.getStatesOfCountry("AU"));  
    // console.log(City.getCitiesOfState());
    
    // const [selectedState, setSelectedState] = useState("Select State");
    
    //   const updatedStates = () =>
    //     State
    //       .StatesOfCountry("AU")
    //       .map((state) => ({ label: state.name, value: state.id, ...state }));

          
    // useEffect(() => {}, [values]);


    return (
        <Container>
                <Text>Address</Text>
                {/* <Select
                    id="state"
                    name="state"
                    options={updatedStates}
                    value={selectedState}

                /> */}
                {/* <Select
                    id="city"
                    name="city"
                    options={updatedCities(values.state ? values.state.value : null)}
                    value={values.city}
                    onChange={(value) => setFieldValue("city", value)}
                    /> */}
                <Border>
                    <Row>
                        <TextInput type="text" placeholder="Select a state" />
                        <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                    </Row>
                </Border>
                <Border>
                    <Row>
                        <TextInput type="text" placeholder="Select a city" />
                        <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                    </Row>
                </Border>
                <Border>
                    <TextInput type="text" placeholder="Address" />
                </Border>
        </Container>
    )
}

const Container = styled.div`
    margin 0 60px;
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

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

export default Address;