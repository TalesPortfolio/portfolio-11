package com.golden.charm.app.clientsApi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CLIENTS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Client {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required.")
    @Size(min = 3, max = 100, message = "The name must be between 3 and 100 characters long.")
    @Column(name = "NAME", nullable = false, length = 100)
    private String name;

    @NotBlank(message = "Email is required.")
    @Column(name = "EMAIL", nullable = false, length = 150, unique = true)
    private String email;

    @NotBlank(message = "Password is required.")
    @Column(name = "PASSWORD", nullable = false, length = 50)
    private String password;

    @NotBlank(message = "Password is required.")
    @Column(name = "CONFIRM_PASSWORD", nullable = false, length = 50)
    private String confirm_password;

    @NotBlank(message = "The telephone cannot be empty")
    @Column(name = "TEL", nullable = false)
    private String tel;

    @NotBlank(message = "City is required.")
    @Column(name = "CITY", nullable = false)
    private String city;

    @NotBlank(message = "Country is required.")
    @Column(name = "COUNTRY", nullable = false)
    private String country;

    @NotBlank(message = "Address is required.")
    @Column(name = "ADDRESS", nullable = false)
    private String address;

    @NotNull(message = "The numero cannot be empty")
    @Column(name = "NUMBER", nullable = false)
    private Integer number;

    @NotNull(message = "Gender is required.")
    @Enumerated(EnumType.STRING)
    @Column(name = "GENDER", nullable = false, length = 10)
    private Gender gender;



}