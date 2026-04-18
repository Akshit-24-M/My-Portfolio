declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | NodeList | Array<Element | string>, vars?: object);
    chars: Element[];
    lines: Element[];
    words: Element[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
    paused(value?: boolean): boolean;
    scrollTop(value: number): void;
    scrollTo(target: string | Element, smooth?: boolean, position?: string): void;
  }
}
