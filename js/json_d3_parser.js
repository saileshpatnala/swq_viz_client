var input = '[{"Great Britain":[{"predicate":{"type":"uri","value":"http://schema.org/spatialCoverage"},"subject":{"type":"uri","value":"http://estc.bl.uk/N72338"},"object":{"type":"literal","value":"Great Britain"}},{"predicate":{"type":"uri","value":"http://schema.org/spatialCoverage"},"subject":{"type":"uri","value":"http://estc.bl.uk/N72335"},"object":{"type":"literal","value":"Great Britain"}}]}]'

var links = [];
var nodes = [];

for (var title in input) {
	for (var variation in title) {
		for (var triple in variation) {
			var triple_type = variation[triple];
			var nodes_type = variation[triple];
			if (triple_type == "subject") {
				triple_type.source = variation[triple].value;
				nodes_type.id = variation[triple].value;
			}
			if (triple_type == "object") {
				triple_type.target = variation[triple].value;
				nodes_type.id = variation[triple].value;
			}
			triple_type.value = 1;
			nodes_type.group = 1;
			links.push(triple_type);
			nodes.push(nodes_type);
		}
	}
}

console.log(links);
console.log(nodes);