package com.golden.charm.app.clientsApi.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.golden.charm.app.clientsApi.dto.ClientRequestDTO;
import com.golden.charm.app.clientsApi.dto.ClientResponseDTO;
import com.golden.charm.app.clientsApi.service.ClientService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/clients")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") 
public class ClientController {

    private final ClientService clientService;

    // GET /api/clients
    // Lista todos os clientes
    @GetMapping
    public ResponseEntity<List<ClientResponseDTO>> getAllClients() {
        List<ClientResponseDTO> clients = clientService.findAll();
        return ResponseEntity.ok(clients);
    }

    // GET /api/clients/{id}
    // Busca cliente por ID
    @GetMapping("/{id}")
    public ResponseEntity<ClientResponseDTO> getClientById(@PathVariable Long id) {
        ClientResponseDTO client = clientService.buscarPorId(id);
        return ResponseEntity.ok(client);
    }

    // GET /api/clients/search?name=Ana
    // Busca clientes pelo nome
    @GetMapping("/search")
    public ResponseEntity<List<ClientResponseDTO>> getClientsByName(@RequestParam String name) {
        List<ClientResponseDTO> clients = clientService.searchName(name);
        return ResponseEntity.ok(clients);
    }

    // GET /api/clients/by-email?email=teste@email.com
    // Busca cliente pelo email
    @GetMapping("/by-email")
    public ResponseEntity<ClientResponseDTO> getClientByEmail(@RequestParam String email) {
        ClientResponseDTO client = clientService.buscarPorEmail(email);
        return ResponseEntity.ok(client);
    }

    // POST /api/clients
    // Cria novo cliente
    @PostMapping
    public ResponseEntity<ClientResponseDTO> createClient(@RequestBody @Valid ClientRequestDTO dto) {
        ClientResponseDTO created = clientService.save(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // PUT /api/clients/{id}
    // Atualiza cliente
    @PutMapping("/{id}")
    public ResponseEntity<ClientResponseDTO> updateClient(
            @PathVariable Long id,
            @RequestBody @Valid ClientRequestDTO dto) {

        ClientResponseDTO updated = clientService.updateClient(id, dto);
        return ResponseEntity.ok(updated);
    }

    // DELETE /api/clients/{id}
    // Remove cliente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        clientService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
