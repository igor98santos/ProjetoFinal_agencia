package com.teste.axios.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.axios.entitiy.PessoaEntity;
import com.teste.axios.services.PessoaService;

@RestController
@RequestMapping("/pessoas")
@CrossOrigin(origins = "http://localhost:3000")
public class PessoaController {

	@Autowired
	private PessoaService pessoaService;

	@GetMapping
	public List<PessoaEntity> getPessoa() {
		return pessoaService.findAll();
	}

	@GetMapping(path = "/{id}")
	public Optional<PessoaEntity> getIdPessoa(@PathVariable Long id) {
		return pessoaService.findById(id);
	}

	@PostMapping
	public void post(@RequestBody PessoaEntity pessoa) {
		pessoaService.save(pessoa);
	}

	@PutMapping("/{id}")
	public PessoaEntity update(@PathVariable Long id, @RequestBody PessoaEntity pessoa) {
		PessoaEntity pessoaAtual = pessoaService.findById(id).get();
		BeanUtils.copyProperties(pessoa, pessoaAtual, "id");
		return pessoaService.update(pessoaAtual);
	}

	@DeleteMapping(path = "/{id}")
	public void delete(@PathVariable Long id) {
		pessoaService.deleteById(id);
	}

}
