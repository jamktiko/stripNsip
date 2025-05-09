import type { KayttajaAsetukset } from '$lib/kayttajaAsetukset';

class Kayttaja {
	private user: KayttajaAsetukset = $state({ normaaliTeema: true });

	get normaaliTeema() {
		return this.user.normaaliTeema;
	}

	set normaaliTeema(uusi: boolean) {
		this.user.normaaliTeema = uusi;
	}
}

export { Kayttaja };
