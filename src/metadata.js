const meta = {
	"fields": [{
		"type": "simplefield",
		"width": 12,
		"srvatt": "nome",
		"parameters": {
		  "label": "Nome",
		  "fieldname": "nome"
		}
	  },{
		"type": "simplefield",
		"width": 12,
		"srvatt": "email",
		"parameters": {
			"label": "Email",
			"fieldname": "email"
		}
	}, {
		"type": "simplefield",
		"width": 12,
		"srvatt": "endereco",
		"parameters": {
			"label": "Endereço",
			"fieldname": "endereco"
		}
	}, {
		"type": "simplefield",
		"width": 4,
		"srvatt": "cep",
		"parameters": {
			"label": "CEP",
			"fieldname": "cep"
		}
	},{
		"type": "simpleselect",
		"width": 4,
		"srvatt": "estado",
		"parameters": {
			"label": "Estado",
			"fieldname": "estado",
			"options": [{
				"id": "MG",
				"nome": "Minas Gerais"
			}, {
				"id": "RJ",
				"nome": "Rio de Janeiro"
			}],
			"optionsUrl": "http://10.24.144.156:5000/estados",

		}
	}, {
		"type": "simpleselect",
		"width": 4,
		"srvatt": "pais",
		"parameters": {
			"label": "País",
			"fieldname": "pais",
			"options": [ {
				"id": "AL",
				"nome": "Albania"
			},{
				"id": "BR",
				"nome": "Brasil"
			}],
			"optionsUrl": "http://10.24.144.156:5000/paises",
		}
	} ],
	"source" : "http://10.24.144.156:5000/registros"
};

export default meta;