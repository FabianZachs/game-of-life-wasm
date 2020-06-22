// We also have to comment out all the #[wasm_bindgen] annotations, and the "cdylib" bits from Cargo.toml
#![feature(test)]

fn main() {
    extern crate test;
    extern crate wasm_game_of_life;

    #[bench]
    fn universe_ticks(b: &mut test::Bencher) {
        let mut universe = wasm_game_of_life::Universe::new();

        b.iter(|| {
            universe.tick();
        });
    }
}
