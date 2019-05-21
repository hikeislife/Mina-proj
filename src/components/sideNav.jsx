import React, { Component } from "react";
import { getMenu } from './data/menu';

class SideNav extends Component {
	state = {
		current: "mp",
		links: getMenu(this.current);
		// links: [["mp", [         // links
  //                        "#recnik",
  //                        "#brauzeri_i_editori",
  //                        "#HTML_u_JSON_izbegavanje_karaktera",
  //                        "#ada",
  //                        "#turing",
  //                        "#aleksandar_totic",
  //                        "#brendan_eich",
  //                        "#vitalik_buterin",
  //                        "#grace_hopper",
  //                        "#lajnus_torvalds",
  //                        "#maja_pantic",
  //                        "#mika_alas",
  //                        "#ryan_dahl",
  //                        "#rajko_tomovic",
  //                        "#timbl",
  //                        "#hedy_lamarr",
  //                        ], [      //items
  //                                "Rečnik",
  //                                "Softver",
  //                                "HTML u JSON",
  //                                "Ada Lovlejs",
  //                                "Alan Turing",
  //                                "Aleksandar Totić",
  //                                "Brendan Ajk",
  //                                "Vitalik Buterin",
  //                                "Grejs Hoper",
  //                                "Lajnus Torvalds",
  //                                "Maja Pantić",
  //                                "Mihailo Petrović Alas",
  //                                "Rajan Dal",
  //                                "Rajko Tomović",
  //                                "TimBL",
  //                                "Hedi Lamar",
  //                                ]],
  //                 ["hc", [         // links
  //                         "#uvod_u_HTML_i_CSS",
  //                         "#struktura_HTML_stranice",
  //                         "#prvi_sajt",
  //                         "#linkovi",
  //                         "#css_border",
  //                         "#css_border_radius",
  //                         "#osnovni_css",
  //                         "#css_linkova",
  //                         "#predah",
  //                         "#uvod_u_slike",
  //                         "#boje",
  //                         "#klase_i_id-ijevi",
  //                         "#divovi_i_spanovi",
  //                         "#html_liste",
  //                         "#css_liste",
  //                         "#meta",
  //                         "#css_flexbox",
  //                         ], [      //items
  //                                "Uvod",
  //                                "HTML struktura",
  //                                "Prvi Sajt",
  //                                "Linkovi",
  //                                "Uvod u CSS - Border",
  //                                "Zaobljeni ćoškovi",
  //                                "Osnovni CSS",
  //                                "CSS Linkova",
  //                                "Predah",
  //                                "Uvod u slike",
  //                                "Boje",
  //                                "Klase i Id-ijevi",
  //                                "Divovi i Spanovi",
  //                                "Liste",
  //                                "Stilizacija Lista",
  //                                "Meta tagovi",
  //                                "Flexbox",
  //                                ]],
  //                 ["gc", [         // links
  //                         "#uvod_u_cmd",
  //                         "#cd_md_rd",
  //                         "#uvod_u_git",
  //                         "#git_instalacija",
  //                         "#git_inicijacija",
  //                         "#dodavanje_i_komit",
  //                         "#pregled_loga",
  //                         "#git_hash",
  //                         "#git_status",
  //                         "#git_diff",
  //                         "#git_brisanje",
  //                         "#git_preimenovanje",
  //                         ], [      //items
  //                                "Uvod u cmd",
  //                                "CD, MD, RD",
  //                                "Uvod u Git",
  //                                "Instalacija, Podešavanja",
  //                                "Inicijacija Repo-a",
  //                                "Dodavanje i Komit",
  //                                "Pregledanje loga",
  //                                "Hašovanje",
  //                                "Status",
  //                                "Pregled izmena",
  //                                "Brisanje Fajlova",
  //                                "Promena Naziva",
  //                                ]],
  //                 ["js", [         // links
  //                        "#uvod_u_js",
  //                        "#js_konzola",
  //                        "#js_tipovi",
  //                        "#js_typeof",
  //                        "#js_varijable_i_konstante",
  //                        "#js_stringovi",
  //                        "#js_brojevi",
  //                        "#js_bools",
  //                        "#js_simboli",
  //                        "#js_funkcije",
  //                        "#js_kako_brauzer_radi",
  //                        ], [      //items
  //                                "Uvod u JS",
  //                                "Konzola",
  //                                "Primitivni tipovi",
  //                                "Spec tipovi i typeof",
  //                                "Varijable i konstante",
  //                                "Stringovi naširoko",
  //                                "Brojevi naširoko",
  //                                "Buliani naširoko",
  //                                "Simboli naširoko",
  //                                "Funkcije",
  //                                "JS Motor",
  //                                ]]
  //                 ]
	}

	renderNav(current) {
		const links = this.state.links;
		//console.log(links)
		for (let i = 0; i < links.length; i++) {
			if (links[i][0] === current) {
				//console.log(links[i][1])
				var currentLinks = links[i];
				//console.log(currentLinks[2])
				let items = currentLinks[2].map(item => <li key={ item }> {item} </li>)
				return items;
			}
		}
		
	}

	render() {
		return ( <div className="sideNav">
			<ul>
				{ this.renderNav(this.state.current) }
			</ul>

		</div> )
	}
}

export default SideNav;