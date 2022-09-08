import React from "react";
import styled from "styled-components";
// import { useFormik } from "formik";
// import Select from "react-select";
// import { Country, State, City } from "country-state-city";

import COLORS from "../../../styles/colors";

import { AiFillCaretDown } from "react-icons/ai";

const Address = () => {
    
    // const addressFromik = useFormik({
    //     initialValues: {
    //       country: "Australia",
    //       state: null,
    //       city: null
    //     },
    //     onSubmit: (values) => console.log(JSON.stringify(values))
    //   });
    
    //   const countries = Country.getAllCountries();
    
    //   const updatedCountries = countries.map((country) => ({
    //     label: country.name,
    //     value: country.isoCode,
    //     ...country
    //   }));
    //   const updatedStates = (countryId) =>
    //     State
    //       .getStatesOfCountry(countryId)
    //       .map((state) => ({ label: state.name, value: state.isoCode, ...state }));


    //   const updatedCities = (countryId, stateId) =>
    //     City
    //       .getCitiesOfState(countryId, stateId)
    //       .map((city) => ({ label: city.name, value: city.name, ...city }));

    
    //   const { values, handleSubmit, setFieldValue, setValues } = addressFromik;
    
    //   console.log(addressFromik.values);


    //   useEffect(() => {}, [values]);


    return (
        <Container>
                <Text>Address</Text>
                {/* <Select
                    id="country"
                    name="country"
                    label="country"
                    options={updatedCountries}
                    value={values.country}
                    onChange={(value) => {
                        setValues({ country: value, state: null, city: null }, false);
                    }}
                />
                <Select
                    id="state"
                    name="state"
                    options={updatedStates(values.country ? values.country.value : null)}
                    value={values.state}
                    onChange={(value) => {
                        setValues({ state: value, city: null }, false);
                    }}
                />
                <Select
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

const Container = styled.form`
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