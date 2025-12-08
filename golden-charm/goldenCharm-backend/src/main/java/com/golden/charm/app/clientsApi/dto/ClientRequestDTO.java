package com.golden.charm.app.clientsApi.dto;

import com.golden.charm.app.clientsApi.model.Client;
import com.golden.charm.app.clientsApi.model.Gender;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ClientRequestDTO {

    @NotBlank(message = "Name is required.")
    @Size(min = 3, max = 100)
    private String name;

    @NotBlank(message = "Email is required.")
    private String email;

    @NotBlank(message = "Password is required.")
    private String password;

    @NotBlank(message = "Confirm password is required.")
    private String confirmPassword;

    @NotBlank(message = "Telephone is required.")
    private String tel;

    @NotBlank(message = "City is required.")
    private String city;

    @NotBlank(message = "Country is required.")
    private String country;

    @NotBlank(message = "Address is required.")
    private String address;

    @NotNull(message = "Number is required.")
    private Integer number;

    @NotNull(message = "Gender is required.")
    private Gender gender;

    // Converter DTO -> Entity
    public Client toEntity() {
        Client c = new Client();
        c.setName(this.name);
        c.setEmail(this.email);
        c.setPassword(this.password);
        c.setConfirm_password(this.confirmPassword);
        c.setTel(this.tel);
        c.setCity(this.city);
        c.setCountry(this.country);
        c.setAddress(this.address);
        c.setNumber(this.number);
        c.setGender(this.gender);
        return c;
    }

}
