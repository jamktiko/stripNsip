import type { KayttajaAsetukset } from '$lib/kayttajaAsetukset';

class Kayttaja {
	private user: KayttajaAsetukset = $state({ normaaliTeema: true, korttienMaara: 11 });

	get normaaliTeema() {
		return this.user.normaaliTeema;
	}

	set normaaliTeema(uusi: boolean) {
		this.user.normaaliTeema = uusi;
	}

	get korttienMaara() {
		return this.user.korttienMaara;
	}

	set korttienMaara(uusi: number) {
		this.user.korttienMaara = uusi;
	}
}

export { Kayttaja };
