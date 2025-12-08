package com.golden.charm.app.clientsApi.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.golden.charm.app.clientsApi.dto.ClientRequestDTO;
import com.golden.charm.app.clientsApi.dto.ClientResponseDTO;
import com.golden.charm.app.clientsApi.model.Client;
import com.golden.charm.app.clientsApi.repository.ClientRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientRepository clientRepository;

    // Listar todos os clients (retornando DTO)
    public List<ClientResponseDTO> findAll() {
        return clientRepository.findAll()
                .stream()
                .map(ClientResponseDTO::fromEntity)
                .collect(Collectors.toList());
    }

    // Buscar por ID (retornando DTO)
    public ClientResponseDTO buscarPorId(Long id) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found with the id: " + id));

        return ClientResponseDTO.fromEntity(client);
    }

    // Buscar por nome (lista de DTO)
    public List<ClientResponseDTO> searchName(String name) {
        List<Client> clients = clientRepository.findByName(name);

        if (clients.isEmpty()) {
            throw new RuntimeException("Customer not found with the name: " + name);
        }

        return clients.stream()
                .map(ClientResponseDTO::fromEntity)
                .collect(Collectors.toList());
    }

    // Buscar por email (retornando DTO)
    public ClientResponseDTO buscarPorEmail(String email) {
        Client client = clientRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Customer not found with the email: " + email));

        return ClientResponseDTO.fromEntity(client);
    }

    // Salvar client (entrada: DTO de request, saída: DTO de response)
    public ClientResponseDTO save(ClientRequestDTO dto) {

        // Regra: email único
        clientRepository.findByEmail(dto.getEmail()).ifPresent(c -> {
            throw new RuntimeException(
                    "There is already a registered customer with this email address: " + dto.getEmail());
        });

        // Converte DTO -> Entity
        Client entity = dto.toEntity();

        Client saved = clientRepository.save(entity);

        // Converte Entity -> DTO
        return ClientResponseDTO.fromEntity(saved);
    }

    // Atualizar client
    public ClientResponseDTO updateClient(Long id, ClientRequestDTO dto) {

        Client exists = clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found with ID:" + id));

        // Regra opcional: verificar se email está sendo trocado para um já usado
        clientRepository.findByEmail(dto.getEmail()).ifPresent(c -> {
            if (!c.getId().equals(id)) {
                throw new RuntimeException(
                        "There is already a registered customer with this email address: " + dto.getEmail());
            }
        });

        // Atualiza campos
        exists.setName(dto.getName());
        exists.setEmail(dto.getEmail());
        exists.setTel(dto.getTel());
        exists.setCity(dto.getCity());
        exists.setCountry(dto.getCountry());
        exists.setAddress(dto.getAddress());
        exists.setNumber(dto.getNumber());
        exists.setGender(dto.getGender());
        exists.setPassword(dto.getPassword());
        exists.setConfirm_password(dto.getConfirmPassword());

        Client updated = clientRepository.save(exists);

        return ClientResponseDTO.fromEntity(updated);
    }

    // Apagar client
    public void delete(Long id) {
        if (!clientRepository.existsById(id)) {
            throw new RuntimeException("There is no client with ID: " + id);
        }

        clientRepository.deleteById(id);
    }
}
