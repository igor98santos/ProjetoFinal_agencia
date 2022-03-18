package com.teste.axios.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teste.axios.entitiy.PessoaEntity;
import com.teste.axios.repositories.PessoaRepository;
@Service
public class PessoaService {
	@Autowired
	private PessoaRepository pessoaRepository; 

	public List<PessoaEntity> findAll() {
		return pessoaRepository.findAll();
	}

	public Optional<PessoaEntity> findById(Long id) {
		return pessoaRepository.findById(id);
	}

	public void save(PessoaEntity pessoa) {
		pessoaRepository.save(pessoa);
	}

	public PessoaEntity update(PessoaEntity pessoa) {
		
		return pessoaRepository.save(pessoa);
	}

	public void deleteById(Long id) {
		pessoaRepository.deleteById(id);
	}
}
