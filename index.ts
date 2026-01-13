const regexp =
  /((?<k1>[^=\s]+)=((?<v1>(["'`])(.*?)\5)|(?<v2>\S+)))|(?<k2>\S+)/g;

export function parse(string: string): Map<string, string | undefined> {
  const io = (string ?? '').matchAll(regexp);

  return new Map(
    [...io]
      .map((item) => item?.groups || {})
      .map(
        ({ k1, k2, v1, v2 }) =>
          [k1 ?? k2, v1 ?? v2] as [string, string | undefined],
      ),
  );
}

export function stringify(object: object | Map<string, unknown>) {
  return (
    object instanceof Map ? [...object.entries()] : Object.entries(object)
  )
    .map(([k, v]) => [k, v].filter((i) => i !== undefined))
    .map((pair) => pair.join('='))
    .join(' ');
}

export function getValue(string?: string): string | undefined {
  return string
    ? (string.match?.(/(["'`])(?<value>.*?)\1/)?.groups?.value ?? string)
    : undefined;
}
