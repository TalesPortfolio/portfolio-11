package com.golden.charm.app.clientsApi.dto;

import com.golden.charm.app.clientsApi.model.Client;
import com.golden.charm.app.clientsApi.model.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ClientResponseDTO {

    private Long id;
    private String name;
    private String email;
    private String tel;
    private String city;
    private String country;
    private String address;
    private Integer number;
    private Gender gender;

    // Converter Entity -> DTO
    public static ClientResponseDTO fromEntity(Client c) {
        return new ClientResponseDTO(
            c.getId(),
            c.getName(),
            c.getEmail(),
            c.getTel(),
            c.getCity(),
            c.getCountry(),
            c.getAddress(),
            c.getNumber(),
            c.getGender()
        );
    }
}
