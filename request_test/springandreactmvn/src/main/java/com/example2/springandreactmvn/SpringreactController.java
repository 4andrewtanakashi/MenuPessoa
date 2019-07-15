package com.example2.springandreactmvn;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpringreactController {
	@RequestMapping(value="/root")
	public String root(@RequestParam(value="request", defaultValue="Hello!") String request) {
		return request;
	}
}
