package com.cadastropessoas.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cadastropessoas.models.Pessoa;

@Service
public class PessoasService {
	private static List<Pessoa> pessoasLista = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		pessoasLista.add(new Pessoa(++idCounter, "Mr.X", "Tyrant"));
		pessoasLista.add(new Pessoa(++idCounter, "Nemesis", "1998 Tyrant T-Alpha"));
		pessoasLista.add(new Pessoa(++idCounter, "Neptube", "1998 Shark with virus"));
	}
	
	public List<Pessoa> findAll() {
		return pessoasLista;
		
	}
	
	public Pessoa salvar (Pessoa pessoa) {
		if (pessoa.getId() == -1 || pessoa.getId() == 0) {
			pessoa.setId(++idCounter);
			pessoasLista.add(pessoa);
		} else {
			deleteById(pessoa.getId());
			pessoasLista.add(pessoa);
		}
		return pessoa;
	}
	
	public Pessoa deleteById (long id) {
		Pessoa pessoa = findById(id);
		
		if (pessoa == null)
			return null;
		
		if (pessoasLista.remove(pessoa))
			return pessoa;
		
		return null;
	}
	
	
	public Pessoa findById (long id) {
		for (Pessoa pessoa : pessoasLista) {
			if (pessoa.getId() == id)
				return pessoa;
		}
		return null;
	}
}
