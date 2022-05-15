const notFound = (
  req: { originalUrl: any },
  res: { status: (arg0: number) => void },
  next: (arg0: Error) => void
) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (err: any, req: any, res: any, next: any) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
